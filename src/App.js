import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import Loader from '~/components/Loader';
import Toastify from '~/components/Toast';
import theme from '~/styles/Theme';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/Global';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Loader />
            <GlobalStyle />
            <Toastify
              position="top-center"
              draggable={false}
              closeOnClick={false}
              autoClose={10000}
            />
            <div id="AppModal" />
            <Suspense fallback={<p>Carregando...</p>}>
              <Routes />
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
