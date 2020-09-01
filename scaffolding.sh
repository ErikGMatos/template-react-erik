#!/bin/bash
#
# Programa: scaffolding.sh
# Autor: Erik Matos
#
# Descrição:
# Este script será responsável pela criação
# de uma estrutura para novos projetos.
#
# Uso: chmod u+x scaffolding.sh && ./scaffolding.sh
#


# Iniciando a interação com o usuário
 echo -n → Digite o nome do projeto sem espaços:
 read PROJECT
 mkdir -p $PROJECT

 echo -e → Criando pastas...
 git clone https://github.com/ErikGMatos/template.git templatetemp &&  cp -r ./templatetemp/. ./$PROJECT  && rm -rf ./templatetemp && cd $PROJECT && yarn

read -r -d '' dashboardText << EOM
import React from 'react';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <p>Seja bem vindo $USER</p>
      <p>este é o template de app ReactJS.By @Erik Matos</p>
    </Container>
  );
}
EOM
> src/pages/Dashboard/index.js
echo "$dashboardText" >> src/pages/Dashboard/index.js

echo -e → Criando package.json...
read -r -d '' packageText << EOM
{
  "name": "$PROJECT",
  "version": "1.0.0",
  "description": "Template react app",
  "main": "src/index.js",
  "author": "$USER by template @Erik Matos",
  "license": "ISC",
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint  --fix",
      "prettier --write",
      "stylelint --fix",
      "cross-env CI=true yarn test --bail --findRelatedTests",
      "git add"
    ]
  },
  "scripts": {
    "start": "node scripts/dev",
    "hml": "node  scripts/hml",
    "azl": "node  scripts/azl",
    "prd": "node  scripts/prd",
    "publish": "node  scripts/publish",
    "build": "webpack -p --mode production --config webpack/webpack.prod.js",
    "test": "jest"
  },
  "devDependencies": {
    "@babel/core": "^7.7.4",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.8.3",
    "@babel/plugin-proposal-optional-chaining": "^7.8.3",
    "@babel/preset-env": "^7.7.4",
    "@babel/preset-react": "^7.7.4",
    "@commitlint/cli": "^8.2.0",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.4.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@types/jest": "^24.0.23",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-root-import": "^6.4.1",
    "babel-plugin-styled-components": "^1.10.6",
    "clean-webpack-plugin": "^3.0.0",
    "commitlint-config-rocketseat": "^0.0.1",
    "cross-env": "^6.0.3",
    "css-loader": "^3.3.2",
    "error-overlay-webpack-plugin": "^0.4.1",
    "eslint": "^6.7.1",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.7.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-import-resolver-babel-plugin-root-import": "^1.1.1",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-import-helpers": "^1.0.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-react": "^7.17.0",
    "eslint-plugin-react-hooks": "^2.3.0",
    "file-loader": "^5.0.2",
    "html-webpack-plugin": "^3.2.0",
    "husky": "^3.1.0",
    "inquirer": "^7.3.3",
    "jest": "^24.9.0",
    "lint-staged": "^9.5.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.13.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "prettier": "^1.19.1",
    "react-refresh": "^0.8.3",
    "react-svg-loader": "^3.0.3",
    "sass-loader": "^8.0.0",
    "stylelint": "^13.6.1",
    "stylelint-config-recommended": "^3.0.0",
    "stylelint-config-styled-components": "^0.1.1",
    "stylelint-custom-processor-loader": "^0.6.0",
    "stylelint-order": "^4.1.0",
    "terser-webpack-plugin": "^2.3.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "@unform/core": "^2.0.0",
    "@unform/web": "^2.0.0",
    "axios": "^0.19.0",
    "axios-cache-adapter": "^2.5.0",
    "date-fns": "^2.9.0",
    "history": "^4.10.1",
    "immer": "^5.0.0",
    "localforage": "^1.7.3",
    "localforage-memoryStorageDriver": "^0.9.2",
    "prop-types": "^15.7.2",
    "react": "^16.12.0",
    "react-content-loader": "^4.3.4",
    "react-datepicker": "^2.11.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-select": "^3.0.8",
    "react-text-mask": "^5.4.3",
    "react-toastify": "^5.5.0",
    "reactotron-react-js": "^3.3.7",
    "reactotron-redux": "^3.1.2",
    "reactotron-redux-saga": "^4.2.3",
    "redux": "^4.0.4",
    "redux-persist": "^6.0.0",
    "redux-saga": "^1.1.3",
    "styled-components": "^4.4.1",
    "yup": "^0.28.0"
  }
}
EOM
> package.json
echo "$packageText" >> package.json

echo -e "✔ Processo finalizado! Projeto $PROJECT foi criado"
echo -e "✔ Projeto $PROJECT foi criado"
echo -e "✔ Rode o comando abaixo"
echo -e "✔ cd $PROJECT && yarn start"
