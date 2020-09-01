import axios from 'axios';
import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';

import commom from '~/services/commom';
import { getCookie, cookieSet, isLoading } from '~/utils';

import { getURLCached } from './cache';
import { enviroment } from './enviroment';

localforage.defineDriver(memoryDriver);
const localforageStore = localforage.createInstance({
  driver: [localforage.LOCALSTORAGE, localforage.INDEXEDDB],
  name: 'CRM_CACHE_REQUESTS',
});

export const API_URL = enviroment(process.env.APP_ENV);

let reqs = 0;
const api = setup({
  baseURL: API_URL.CONFIG_API_URL,
  cache: {
    maxAge: API_URL.TIME_CACHE_DEFAULT * 60 * 1000,
    store: localforageStore,
    exclude: {
      filter: req => getURLCached(req), // true não cacheia, false cacheia
      query: false,
    },
  },
});

const AxiosRefreshToken = axios.create({
  baseURL: `${API_URL.CONFIG_API_URL_REFRESH_TOKEN}/refreshtoken`,
  headers: { 'Content-Type': 'application/json' },
});

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(accessToken) {
  subscribers = subscribers.filter(callback => callback(accessToken));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

api.interceptors.request.use(async config => {
  try {
    isLoading((reqs += 1));
    if (
      !commom.CONFIG_CRM_URLS_WITHOUT_AUTHORIZATION_BEARER.includes(
        config.baseURL
      )
    ) {
      const token = getCookie('CockpitLogged');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  } catch (error) {
    console.tron.log(error);
    return error;
  }
});

api.interceptors.response.use(
  async response => {
    isLoading((reqs -= 1));
    if (response.request.fromCache) {
      // eslint-disable-next-line
      console.log(
        `resposta veio do cache, url: ${response.config.url}`,
        response.config.params
      );
    }
    return response;
  },
  async error => {
    const { config, response } = error;
    let readyToFetchNewToken = '';
    const {
      headers: { ignoreRefreshToken = false },
    } = config;
    try {
      const originalRequest = config;
      if (
        API_URL.refreshToken &&
        response.status === 401 &&
        !ignoreRefreshToken
      ) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          const token = getCookie('CockpitLogged');
          const data = {
            Token: token,
          };
          const newAccessToken = await AxiosRefreshToken.post(undefined, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const {
            data: {
              Result: { jwt: newJwt },
            },
          } = newAccessToken;
          readyToFetchNewToken = newJwt;
          cookieSet('CockpitLogged', newJwt);
          isAlreadyFetchingAccessToken = false;
        }
        const retryOriginalRequest = new Promise(resolve => {
          addSubscriber(accessToken => {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            resolve(axios(originalRequest));
          });
        });
        isLoading((reqs -= 1));
        if (readyToFetchNewToken) onAccessTokenFetched(readyToFetchNewToken);
        return retryOriginalRequest;
      }
      const { data, status } = response;
      const errorObj = {
        data: data.Retorno || '',
        status,
        message: !data.Mensagens
          ? 'Sistema temporariamente indisponível'
          : data.Mensagens[0] || data.Mensagens,
      };
      isLoading((reqs -= 1));
      return errorObj;
    } catch (err) {
      if (err) {
        isLoading((reqs -= 1));
      }
    }
    return Promise.reject(error);
  }
);

export default api;
