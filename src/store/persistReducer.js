import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import SetTransform from './SetTransform';

export default reducers => {
  const persistedreducer = persistReducer(
    {
      key: 'CRM_STORAGE',
      storage,
      whitelist: [], // se quiser persistir adiciona o nome do reducer aqui
      transforms: [SetTransform],
    },
    reducers
  );

  return persistedreducer;
};
