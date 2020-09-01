const { execSync } = require('child_process');

const { existingCountries, inquirerInit } = require('./config');

const arg = process.argv[2];
const exists = existingCountries.includes(arg);
const commandLine = `cross-env REACT_FAST=true APP_ENV=development translate=${arg} webpack-dev-server --open --mode development --config webpack/webpack.dev.js`;
if (!exists) {
  return inquirerInit(existingCountries, commandLine);
}
execSync(commandLine, { stdio: [0, 1, 2] });
