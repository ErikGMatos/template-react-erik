export const enviroment = env => {
  const chooseEnvironment = {
    development: () => ({
      CONFIG_API_URL: `https://minhaapi.com.br/api`,
      CONFIG_API_URL_REFRESH_TOKEN: `https://minhaapi.com.br/api/refresh`,
      TIME_CACHE_DEFAULT: 2,
      refreshToken: true,
    }),
    homologation: () => ({
      CONFIG_API_URL: `https://minhaapi.com.br/api`,
      CONFIG_API_URL_REFRESH_TOKEN: `https://minhaapi.com.br/api/refresh`,
      TIME_CACHE_DEFAULT: 2,
      refreshToken: true,
    }),
    production: () => ({
      CONFIG_API_URL: `https://minhaapi.com.br/api`,
      CONFIG_API_URL_REFRESH_TOKEN: `https://minhaapi.com.br/api/refresh`,
      TIME_CACHE_DEFAULT: 2,
      refreshToken: true,
    }),
  };

  return chooseEnvironment[env]();
};
