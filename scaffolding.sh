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

# Declarando as variáveis
# declare -a FOLDERS=(
#   "public"
#   "src"
#   "src/assets"
#   "src/assets/favicon"
#   "src/assets/img"
#   "src/assets/img/png"
#   "src/assets/img/svg"
#   "src/components"
#   "src/components/Card"
#   "src/config"
#   "src/pages"
#   "src/pages/Home"
#   "src/services"
#   "src/store"
#   "src/store/modules"
#   "src/store/modules/home"
#   "src/styles"
#   "src/styles/Global"
#   "src/styles/Theme"
#   "src/utils"
#   "webpack"
# )
# declare -a FILES=(
#   "public/template.html"
#   "src/components/Card/index.js"
#   "src/components/Card/styles.js"
#   "src/config/reactotronConfig.js"
#   "src/pages/index.js"
#   "src/pages/App.js"
#   "src/pages/routes.js"
#   "src/pages/Home/index.js"
#   "src/pages/Home/styles.js"
#   "src/services/api.js"
#   "src/services/cache.js"
#   "src/services/history.js"
#   "src/store/modules/home/actions.js"
#   "src/store/modules/home/reducer.js"
#   "src/store/modules/home/sagas.js"
#   "src/store/index.js"
#   "src/store/persistReducer.js"
#   "src/store/setTransform.js"
#    "src/styles/Global/index.js"
#   "src/styles/Theme/index.js"
#   "src/utils/index.js"
#   "webpack/webpack.common.js"
#   "webpack/webpack.dev.js"
#   "webpack/webpack.prod.js"
#   ".editorconfig"
#   ".eslintrc.js"
#   ".gitignore"
#   ".prettierrc"
#   ".stylelintrc.js"
#   "babel.config.js"
#   "commitlint.config.js"
#   "jest.config.js"
#   "jsconfig.json"
#   "README.md"
# )
# Iniciando a interação com o usuário
 echo -n → Digite o nome do projeto sem espaços: 
 read PROJECT
 mkdir -p $PROJECT
# Criando estrutura do projeto
 
 echo -e → Criando pastas...
 git clone https://github.com/ErikGMatos/template.git templatetemp  &&  cp -r ./templatetemp/. ./$PROJECT  && rm -rf ./templatetemp
#  rm -rf ./tt
# for val in ${FOLDERS[@]}; do
#    mkdir -p $val
# done

# echo -e → Criando arquivos...
# for fil in ${FILES[@]}; do
#    touch $fil
# done

# read -r -d '' componetIndex << EOM
# import React from 'react';

# import { Container } from './styles';

# export default function Card() {
#   return <Container>Hello World, this is my template react :) by Erik Matos</Container>;
# }
# EOM
# echo "$componetIndex" >> src/components/Card/index.js

# read -r -d '' componentStyle << EOM
# import styled from 'styled-components';

# export const Container = styled.div\`
#   flex: 1;
#   padding: 16px;
#   border-radius: 4px;
#   background-color: #fff;
# \`;
# EOM
# echo "$componentStyle" >>  src/components/Card/styles.js

# read -r -d '' home << EOM
# import React, { useState } from 'react';

# import Card from '~/components/Card';

# export default function Home() {
#   return <Card />;
# }
# EOM
# echo "$home" >>  src/pages/Home/index.js

# read -r -d '' app << EOM
# import React, { Suspense } from 'react';
# import { Provider } from 'react-redux';
# import { Router } from 'react-router-dom';

# import { PersistGate } from 'redux-persist/integration/react';

# import './config/ReactotronConfig';

# import Toastify from '~/components/Toast';

# import Routes from './routes';
# import history from './services/history';
# import { store, persistor } from './store';
# import 'react-toastify/dist/ReactToastify.css';

# export default function App() {
#   return (
#     <Provider store={store}>
#       <PersistGate persistor={persistor}>
#         <Router history={history}>
#           <Toastify
#             position="top-center"
#             draggable={false}
#             closeOnClick={false}
#             autoClose={10000}
#           />
#           <div id="AppModal" />
#           <Suspense fallback={<p>Carregando...</p>}>
#             <Routes />
#           </Suspense>
#         </Router>
#       </PersistGate>
#     </Provider>
#   );
# }
# EOM
# echo "$app" >>  src/pages/App.js

# read -r -d '' webpackCommon << EOM
# const HtmlWebpackPlugin = require('html-webpack-plugin');
# const MiniCssExtractPlugin = require('mini-css-extract-plugin');
# const path = require('path');
# const webpack = require('webpack');

# const isDevelopment = Boolean(process.env.REACT_FAST);

# module.exports = {
#   entry: path.resolve(__dirname, '..', 'src', 'index.js'),
#   output: {
#     publicPath: '/',
#   },
#   module: {
#     rules: [
#       {
#         test: /\.js$/,
#         exclude: /node_modules/,
#         use: [
#           {
#             loader: 'babel-loader',
#             options: {
#               plugins: [
#                 isDevelopment && require.resolve('react-refresh/babel'),
#               ].filter(Boolean),
#             },
#           },
#           {
#             loader: 'stylelint-custom-processor-loader',
#           },
#         ],
#       },
#       {
#         test: /.*\.icone\.(svg|gif|png|jpe?g)$/i,
#         use: {
#           loader: 'file-loader',
#           options: {
#             name: '[name].[hash].[ext]',
#             outputPath: 'static/images',
#           },
#         },
#       },
#       {
#         test: /.*\.inline\.(svg)$/i,
#         use: [
#           {
#             loader: 'react-svg-loader',
#           },
#         ],
#       },
#       {
#         test: /\.(sa|sc|c)ss$/,
#         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
#       },
#     ],
#   },
#   plugins: [
#     new HtmlWebpackPlugin({
#       template: './public/template.html',
#       favicon: './src/assets/favicon/favicon.ico',
#     }),
#     new webpack.DefinePlugin({
#       'process.env.REACT_FAST': JSON.stringify(process.env.REACT_FAST),
#     }),
#     new MiniCssExtractPlugin({
#       filename: 'static/css/[name].[contentHash].css',
#     }),
#   ],
#   resolve: {
#     extensions: ['.js', '.jsx', '.json'],
#   },
# };
# EOM
# echo "$webpackCommon" >> webpack/webpack.common.js

# read -r -d '' webpackDev << EOM
# const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
# const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
# const path = require('path');
# const merge = require('webpack-merge');

# const common = require('./webpack.common');

# module.exports = merge(common, {
#   output: {
#     path: path.resolve(__dirname, 'dist'),
#     filename: '[name].bundle.js',
#     chunkFilename: '[name].bundle.js',
#   },
#   devServer: {
#     compress: true,
#     // host: 'local.dominio.com.br',
#     port: 8080,
#     historyApiFallback: true,
#     disableHostCheck: true,
#     hot: true,
#     // proxy: {
#     //   '*': {
#     //     bypass: req => {
#     //       jsonRequest.Records[0].cf.request.uri = req.originalUrl;
#     //       lambdaViewer.handler(jsonRequest, null, (err, res) => {
#     //         req.originalUrl = res.uri;
#     //       });
#     //       return req.originalUrl;
#     //     },
#     //   },
#     // },
#     headers: {
#       'Access-Control-Allow-Origin': '*',
#       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
#       'Access-Control-Allow-Headers':
#         'X-Requested-With, content-type, Authorization',
#     },
#   },
#   plugins: [
#     new ErrorOverlayPlugin(),
#     new ReactRefreshWebpackPlugin({ overlay: false }),
#   ],
#   devtool: 'cheap-module-source-map',
# });
# EOM
# echo "$webpackDev" >> webpack/webpack.dev.js

# read -r -d '' webpackProd << EOM
# const { CleanWebpackPlugin } = require('clean-webpack-plugin');
# const HtmlWebpackPlugin = require('html-webpack-plugin');
# const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
# const path = require('path');
# const TerserPlugin = require('terser-webpack-plugin');
# const merge = require('webpack-merge');

# const common = require('./webpack.common');

# module.exports = merge(common, {
#   mode: 'production',
#   output: {
#     publicPath: '/pastapublica/',
#     path: path.resolve(
#       __dirname,
#       '..',
#       'dist',
#       'source',
#     ),
#     filename: 'static/js/[name].[contentHash].bundle.js',
#     chunkFilename: 'static/js/[name].[contentHash].bundle.js',
#   },
#   optimization: {
#     splitChunks: {
#       chunks: 'all',
#       cacheGroups: {
#         vendors: {
#           test: /[\\/]node_modules[\\/]/,
#           priority: -10,
#           name: 'vendors',
#           reuseExistingChunk: true,
#         },
#         default: {
#           minChunks: 2,
#           priority: -20,
#           reuseExistingChunk: true,
#         },
#       },
#     },

#     minimizer: [
#       new OptimizeCssAssetsPlugin(),
#       new TerserPlugin({
#         terserOptions: {
#           output: {
#             comments: false,
#           },
#         },
#         extractComments: false,
#       }),
#     ],
#   },

#   plugins: [
#     new CleanWebpackPlugin(),
#     new HtmlWebpackPlugin({
#       filename: 'index.html',
#       template: './public/template.html',
#       favicon: './src/assets/favicon/favicon.ico',
#       minify: {
#         removeAttributeQuotes: true,
#         collapseWhitespace: true,
#         removeComments: true,
#       },
#     }),
#   ],
# });
# EOM
# echo "$webpackProd" >> webpack/webpack.prod.js

# read -r -d '' editorConfigText << EOM
# root = true

# [*]
# end_of_line = lf
# indent_style = space
# indent_size = 2
# charset = utf-8
# trim_trailing_whitespace = true
# insert_final_newline = true
# EOM
# echo "$editorConfigText" >> .editorconfig

# read -r -d '' eslintrcText << EOM
# module.exports = {
#   env: {
#     browser: true,
#     es6: true,
#     jest: true,
#   },
#   extends: ['airbnb', 'prettier', 'prettier/react'],
#   globals: {
#     Atomics: 'readonly',
#     SharedArrayBuffer: 'readonly',
#   },
#   parser: 'babel-eslint',
#   parserOptions: {
#     ecmaFeatures: {
#       jsx: true,
#     },
#     ecmaVersion: 2018,
#     sourceType: 'module',
#   },
#   plugins: ['react', 'prettier', 'react-hooks', 'import-helpers'],
#   ignorePatterns: ['!.eslintrc.js', '!.storybook', '!.stylelintrc.js'],
#   rules: {
#     'prettier/prettier': 'error',
#     'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
#     'import/prefer-default-export': 'off',
#     'no-console': ['error', { allow: ['tron'] }],
#     'no-param-reassign': 'off',
#     'consistent-return': 'off',
#     'react-hooks/rules-of-hooks': 'error',
#     'react-hooks/exhaustive-deps': 'warn',
#     'jsx-a11y/label-has-associated-control': [
#       2,
#       {
#         controlComponents: ['Input'],
#       },
#     ],
#     'react/jsx-props-no-spreading': 'off',
#     'import/no-extraneous-dependencies': [
#       'error',
#       {
#         devDependencies: true,
#       },
#     ],
#     'import-helpers/order-imports': [
#       'warn',
#       {
#         newlinesBetween: 'always',
#         groups: ['/^react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
#         alphabetize: { order: 'asc', ignoreCase: true },
#       },
#     ],
#   },
#   settings: {
#     'import/resolver': {
#       'babel-plugin-root-import': {
#         rootPathSuffix: 'src',
#       },
#     },
#   },
# };
# EOM
# echo "$eslintrcText" >> .eslintrc.js

# read -r -d '' gitignoreText << EOM
# # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# # dependencies
# /node_modules
# /.pnp
# .pnp.js

# # testing
# __tests__/coverage

# # production
# /build
# /dist

# # misc
# .DS_Store
# .env.local
# .env.development.local
# .env.test.local
# .env.production.local

# npm-debug.log*
# yarn-debug.log*
# yarn-error.log*
# EOM
# echo "$gitignoreText" >> .gitignore

# read -r -d '' prettierrcText << EOM
# {
#   "singleQuote": true,
#   "trailingComma": "es5"
# }
# EOM
# echo "$prettierrcText" >> .prettierrc

# read -r -d '' stylelinttcText << EOM
# module.exports = {
#   extends: [
#     'stylelint-config-recommended',
#     'stylelint-config-styled-components',
#   ],
#   plugins: ['stylelint-order'],
#   sintax: 'css-in-js',
#   rules: {
#     'rule-empty-line-before': ['always', { except: 'first-nested' }],
#     'at-rule-empty-line-before': 'always',
#     'color-hex-case': 'lower',
#     'color-no-invalid-hex': true,
#     'shorthand-property-no-redundant-values': true,
#     'at-rule-no-unknown': [
#       true,
#       {
#         ignoreAtRules: ['extends'],
#       },
#     ],
#     'block-no-empty': [
#       true,
#       {
#         ignore: ['comments'],
#       },
#     ],
#     'unit-whitelist': ['em', 'rem', '%', 'px', 's', 'deg', 'vh', 'ms'],
#     'order/order': [
#       [
#         'declarations',
#         'rules',
#         'at-rules',
#         {
#           type: 'at-rule',
#           name: 'keyframes',
#         },
#         {
#           type: 'at-rule',
#           name: 'media',
#         },
#       ],
#       { severity: 'error' },
#     ],
#     'order/properties-order': [
#       [
#         'content',
#         'position',
#         'top',
#         'right',
#         'bottom',
#         'left',
#         'z-index',
#         'display',
#         'vertical-align',
#         'flex',
#         'flex-grow',
#         'flex-shrink',
#         'flex-basis',
#         'flex-direction',
#         'flex-flow',
#         'flex-wrap',
#         'grid',
#         'grid-area',
#         'grid-template',
#         'grid-template-areas',
#         'grid-template-rows',
#         'grid-template-columns',
#         'grid-row',
#         'grid-row-start',
#         'grid-row-end',
#         'grid-column',
#         'grid-column-start',
#         'grid-column-end',
#         'grid-auto-rows',
#         'grid-auto-columns',
#         'grid-auto-flow',
#         'grid-gap',
#         'grid-row-gap',
#         'grid-column-gap',
#         'gap',
#         'row-gap',
#         'column-gap',
#         'align-content',
#         'align-items',
#         'align-self',
#         'justify-content',
#         'justify-items',
#         'justify-self',
#         'order',
#         'float',
#         'clear',
#         'object-fit',
#         'overflow',
#         'overflow-x',
#         'overflow-y',
#         'overflow-scrolling',
#         'clip',
#         'box-sizing',
#         'width',
#         'min-width',
#         'max-width',
#         'height',
#         'min-height',
#         'max-height',
#         'margin',
#         'margin-top',
#         'margin-right',
#         'margin-bottom',
#         'margin-left',
#         'padding',
#         'padding-top',
#         'padding-right',
#         'padding-bottom',
#         'padding-left',
#         'border',
#         'border-spacing',
#         'border-collapse',
#         'border-width',
#         'border-style',
#         'border-color',
#         'border-top',
#         'border-top-width',
#         'border-top-style',
#         'border-top-color',
#         'border-right',
#         'border-right-width',
#         'border-right-style',
#         'border-right-color',
#         'border-bottom',
#         'border-bottom-width',
#         'border-bottom-style',
#         'border-bottom-color',
#         'border-left',
#         'border-left-width',
#         'border-left-style',
#         'border-left-color',
#         'border-radius',
#         'border-top-left-radius',
#         'border-top-right-radius',
#         'border-bottom-right-radius',
#         'border-bottom-left-radius',
#         'border-image',
#         'border-image-source',
#         'border-image-slice',
#         'border-image-width',
#         'border-image-outset',
#         'border-image-repeat',
#         'border-top-image',
#         'border-right-image',
#         'border-bottom-image',
#         'border-left-image',
#         'border-corner-image',
#         'border-top-left-image',
#         'border-top-right-image',
#         'border-bottom-right-image',
#         'border-bottom-left-image',
#         'background',
#         'background-color',
#         'background-image',
#         'background-attachment',
#         'background-position',
#         'background-position-x',
#         'background-position-y',
#         'background-clip',
#         'background-origin',
#         'background-size',
#         'background-repeat',
#         'color',
#         'box-decoration-break',
#         'box-shadow',
#         'outline',
#         'outline-width',
#         'outline-style',
#         'outline-color',
#         'outline-offset',
#         'table-layout',
#         'caption-side',
#         'empty-cells',
#         'list-style',
#         'list-style-position',
#         'list-style-type',
#         'list-style-image',
#         'font',
#         'font-weight',
#         'font-style',
#         'font-variant',
#         'font-size-adjust',
#         'font-stretch',
#         'font-size',
#         'font-family',
#         'src',
#         'line-height',
#         'letter-spacing',
#         'quotes',
#         'counter-increment',
#         'counter-reset',
#         '-ms-writing-mode',
#         'text-align',
#         'text-align-last',
#         'text-decoration',
#         'text-emphasis',
#         'text-emphasis-position',
#         'text-emphasis-style',
#         'text-emphasis-color',
#         'text-indent',
#         'text-justify',
#         'text-outline',
#         'text-transform',
#         'text-wrap',
#         'text-overflow',
#         'text-overflow-ellipsis',
#         'text-overflow-mode',
#         'text-shadow',
#         'white-space',
#         'word-spacing',
#         'word-wrap',
#         'word-break',
#         'overflow-wrap',
#         'tab-size',
#         'hyphens',
#         'interpolation-mode',
#         'opacity',
#         'visibility',
#         'filter',
#         'resize',
#         'cursor',
#         'pointer-events',
#         'user-select',
#         'unicode-bidi',
#         'direction',
#         'columns',
#         'column-span',
#         'column-width',
#         'column-count',
#         'column-fill',
#         'column-gap',
#         'column-rule',
#         'column-rule-width',
#         'column-rule-style',
#         'column-rule-color',
#         'break-before',
#         'break-inside',
#         'break-after',
#         'page-break-before',
#         'page-break-inside',
#         'page-break-after',
#         'orphans',
#         'widows',
#         'zoom',
#         'max-zoom',
#         'min-zoom',
#         'user-zoom',
#         'orientation',
#         'fill',
#         'stroke',
#         'transition',
#         'transition-delay',
#         'transition-timing-function',
#         'transition-duration',
#         'transition-property',
#         'transform',
#         'transform-origin',
#         'animation',
#         'animation-name',
#         'animation-duration',
#         'animation-play-state',
#         'animation-timing-function',
#         'animation-delay',
#         'animation-iteration-count',
#         'animation-direction',
#         'animation-fill-mode',
#       ],
#       {
#         unspecified: 'bottom',
#         severity: 'error',
#       },
#     ],
#   },
# };
# EOM
# echo "$stylelinttcText" >> .stylelintrc.js

# read -r -d '' babelText << EOM
# module.exports = {
#   presets: [
#     [
#       '@babel/preset-env',
#       {
#         targets: {
#           node: 'current',
#         },
#       },
#     ],
#     ['@babel/preset-react'],
#   ],
#   plugins: [
#     ['babel-plugin-styled-components', { fileName: false }],
#     ['@babel/plugin-proposal-optional-chaining'],
#     ['@babel/plugin-proposal-nullish-coalescing-operator'],
#     [
#       'babel-plugin-root-import',
#       {
#         rootPathSuffix: 'src',
#       },
#     ],
#   ],
# };
# EOM
# echo "$babelText" >> babel.config.js

# read -r -d '' commitlintText << EOM
# module.exports = {
#   extends: ['rocketseat'],
#   rules: {
#     'scope-case': [2, 'always', 'lower-case'],
#     'scope-empty': [2, 'never'],
#     'subject-max-length': [2, 'always', 140],
#     'type-enum': [
#       2,
#       'always',
#       ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert'],
#     ],
#   },
# };
# EOM
# echo "$commitlintText" >> commitlint.config.js

# read -r -d '' jestText << EOM
# // For a detailed explanation regarding each configuration property, visit:
# // https://jestjs.io/docs/en/configuration.html

# module.exports = {
#   // All imported modules in your tests should be mocked automatically
#   // automock: false,

#   // Stop running tests after \`n\` failures
#   bail: 1,

#   // Respect "browser" field in package.json when resolving modules
#   // browser: false,

#   // The directory where Jest should store its cached dependency information
#   // cacheDirectory: "C:\\Users\\p22.matos\\AppData\\Local\\Temp\\jest",

#   // Automatically clear mock calls and instances between every test
#   clearMocks: true,

#   // Indicates whether the coverage information should be collected while executing the test
#   collectCoverage: false,

#   // An array of glob patterns indicating a set of files for which coverage information should be collected
#   collectCoverageFrom: ['src/**.js', '!src/index.js'],

#   // The directory where Jest should output its coverage files
#   coverageDirectory: '__tests__/coverage',

#   // An array of regexp pattern strings used to skip coverage collection
#   // coveragePathIgnorePatterns: [
#   //   "\\\\node_modules\\\\"
#   // ],

#   // A list of reporter names that Jest uses when writing coverage reports
#   coverageReporters: ['text', 'lcov'],

#   // An object that configures minimum threshold enforcement for coverage results
#   // coverageThreshold: null,

#   // A path to a custom dependency extractor
#   // dependencyExtractor: null,

#   // Make calling deprecated APIs throw helpful error messages
#   // errorOnDeprecated: false,

#   // Force coverage collection from ignored files using an array of glob patterns
#   // forceCoverageMatch: [],

#   // A path to a module which exports an async function that is triggered once before all test suites
#   // globalSetup: null,

#   // A path to a module which exports an async function that is triggered once after all test suites
#   // globalTeardown: null,

#   // A set of global variables that need to be available in all test environments
#   // globals: {},

#   // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
#   // maxWorkers: "50%",

#   // An array of directory names to be searched recursively up from the requiring module's location
#   // moduleDirectories: ['node_modules', 'translate'],

#   // An array of file extensions your modules use
#   // moduleFileExtensions: [
#   //   "js",
#   //   "json",
#   //   "jsx",
#   //   "ts",
#   //   "tsx",
#   //   "node"
#   // ],

#   // A map from regular expressions to module names that allow to stub out resources with a single module
#   moduleNameMapper: {
#     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
#       '<rootDir>/__tests__/fileMock.js',
#     '^~/(.*)': '<rootDir>/src/$1',
#     '^@translate': '<rootDir>/translate/pt-br.js',
#   },

#   // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
#   // modulePathIgnorePatterns: [],

#   // Activates notifications for test results
#   // notify: false,

#   // An enum that specifies notification mode. Requires { notify: true }
#   // notifyMode: "failure-change",

#   // A preset that is used as a base for Jest's configuration
#   // preset: null,

#   // Run tests from one or more projects
#   // projects: null,

#   // Use this configuration option to add custom reporters to Jest
#   // reporters: undefined,

#   // Automatically reset mock state between every test
#   // resetMocks: false,

#   // Reset the module registry before running each individual test
#   // resetModules: false,

#   // A path to a custom resolver
#   // resolver: null,

#   // Automatically restore mock state between every test
#   // restoreMocks: false,

#   // The root directory that Jest should scan for tests and modules within
#   // rootDir: null,

#   // A list of paths to directories that Jest should use to search for files in
#   // roots: [
#   //   "<rootDir>"
#   // ],

#   // Allows you to use a custom runner instead of Jest's default test runner
#   // runner: "jest-runner",

#   // The paths to modules that run some code to configure or set up the testing environment before each test
#   // setupFiles: [],

#   // A list of paths to modules that run some code to configure or set up the testing framework before each test
#   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

#   // A list of paths to snapshot serializer modules Jest should use for snapshot testing
#   // snapshotSerializers: [],

#   // The test environment that will be used for testing
#   // testEnvironment: "jest-environment-jsdom",

#   // Options that will be passed to the testEnvironment
#   // testEnvironmentOptions: {},

#   // Adds a location field to test results
#   // testLocationInResults: false,

#   // The glob patterns Jest uses to detect test files
#   testMatch: ['**/__tests__/**/*.test.js'],

#   // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
#   // testPathIgnorePatterns: [
#   //   "\\\\node_modules\\\\"
#   // ],

#   // The regexp pattern or array of patterns that Jest uses to detect test files
#   // testRegex: [],

#   // This option allows the use of a custom results processor
#   // testResultsProcessor: null,

#   // This option allows use of a custom test runner
#   // testRunner: "jasmine2",

#   // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
#   // testURL: "http://localhost",

#   // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
#   // timers: "real",

#   // A map from regular expressions to paths to transformers
#   // transform: {
#   //   '^.+\\.js$': 'babel-jest',
#   //   '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
#   //     'jest-transform-stub',
#   // },

#   // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
#   // transformIgnorePatterns: [
#   //   "\\\\node_modules\\\\"
#   // ],

#   // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
#   // unmockedModulePathPatterns: undefined,

#   // Indicates whether each individual test should be reported during the run
#   // verbose: null,

#   // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
#   // watchPathIgnorePatterns: [],

#   // Whether to use watchman for file crawling
#   // watchman: true,
# };
# EOM
# echo "$jestText" >> jest.config.js

# read -r -d '' jsconfigText << EOM
# {
#   "compilerOptions": {
#     "baseUrl": "src",
#     "paths": {
#       "~/*": ["*"],
#     }
#   }
# }
# EOM
# echo "$jsconfigText" >> jsconfig.json

# read -r -d '' readmeText << EOM
# ## Cockpit CRM

# #### Requisitos:
# - [NodeJS](https://nodejs.org/en/) <img src="https://www.taniarascia.com/static/517c02bd875932e2a959488763695b28/4148e/node.png" width=19/>
# - [Yarn](https://yarnpkg.com/lang/en/) <img src="https://tfrommen.de/wp-content/uploads/yarn-logo-400x400-1478627696.jpg" width=19/>

# ##### Dentro da pasta raiz do projeto execute o seguinte comando para instalar as dependências e rodar em modo \`desenvolvimento\`:

# \```console
# user-root:~$ yarn && yarn dev
# \```

# ##### ou o seguinte comando em modo \`produção\`:

# \```console
# user-root:~$ yarn && yarn build
# \```

# #### Usamos a convenção de commits de código. Por que usar?
# - [x] *Gerando CHANGELOGs automaticamente*
# - [x] *Determinar automaticamente um bump de versão semântica (com base nos tipos de confirmações enviadas).*
# - [x] *Comunicar a natureza das mudanças a colegas de equipe, público e outras partes interessadas.*
# - [x] *Facilitando a contribuição das pessoas em seus projetos, permitindo que elas explorem um histórico de consolidação mais estruturado.*

# \```console

# Exemplo commit feature: $ git commit -m 'feat(escopo): Mensagem de até 50 caracteres'

# tipos aceitos : ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']
# mensagem deve ser em sentense-case: "Começando com letra maíscula...."
# todos os testes dos arquivos \`alterados\` serão executados antes do commit, caso falhe o commit será abortado.
# \```
# EOM
# echo "$readmeText" >> README.md

# echo -e → Criando package.json...
# yarn init -y
# read -r -d '' packageText << EOM
# {
#  "author": "Erik Matos",
#   "license": "ISC",
#   "name": "$PROJECT",
#   "version": "1.0.0",
#   "husky": {
#     "hooks": {
#       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
#       "pre-commit": "lint-staged"
#     }
#   },
#   "lint-staged": {
#     "*.js": [
#       "eslint  --fix",
#       "prettier --write",
#       "stylelint --fix",
#       "cross-env CI=true yarn test --bail --findRelatedTests",
#       "git add"
#     ]
#   },
#   "description": "$PROJECT",
#   "main": "index.js",
#   "scripts": {
#     "start": "cross-env REACT_FAST=true webpack-dev-server --open --mode development --config webpack/webpack.dev.js",
#     "build": "webpack -p --mode production --config webpack/webpack.prod.js",
#     "storybook": "start-storybook -p 6006",
#     "build-storybook": "build-storybook",
#     "test": "jest",
#     "coverage": "jest --coverage --watchAll=false"
#   }
# }
# EOM
# > package.json
# echo "$packageText" >> package.json

#  echo -e "✔ Instalando pacotes"
#  yarn add react react-dom react-router-dom styled-components @unform/core @unform/web axios axios-cache-adapter date-fns history immer localforage localforage-memoryStorageDriver prop-types redux react-redux reactotron-react-js reactotron-redux reactotron-redux-saga redux-persist redux-saga yup
#  yarn add -D @babel/core @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining @babel/preset-env @babel/preset-react @commitlint/cli @pmmmwh/react-refresh-webpack-plugin @testing-library/jest-dom @testing-library/react @types/jest babel-eslint babel-loader babel-plugin-root-import babel-plugin-styled-components clean-webpack-plugin commitlint-config-rocketseat cross-env css-loader error-overlay-webpack-plugin eslint eslint-import-resolver-babel-plugin-root-import eslint-import-resolver-alias eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks file-loader html-webpack-plugin husky inquirer jest lint-staged mini-css-extract-plugin node-sass optimize-css-assets-webpack-plugin prettier react-refresh sass-loader stylelint stylelint-config-recommended stylelint-config-styled-components stylelint-custom-processor-loader stylelint-order terser-webpack-plugin webpack webpack-cli webpack-dev-server webpack-merge
# # Mensagem final



 echo -e "✔ Processo finalizado! Projeto $PROJECT foi criado"