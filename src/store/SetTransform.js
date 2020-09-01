import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  inboundState => {
    const encoded = JSON.stringify({ ...inboundState });
    return btoa(btoa(encoded));
  },
  outboundState => {
    const decoded = JSON.parse(atob(atob(outboundState)));
    return { ...decoded };
  },
  { whitelist: [] } // se quiser persistir em base64 adiciona o nome do reducer aqui
);

export default SetTransform;
