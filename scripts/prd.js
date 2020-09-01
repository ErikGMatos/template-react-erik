const { execSync } = require('child_process');

const { existingCountries, inquirerInit } = require('./config');

const arg = process.argv[2];
const exists = existingCountries.includes(arg);
const commandLine = `cross-env APP_ENV=production translate=${arg} yarn build`;
if (!exists) {
  return inquirerInit(existingCountries, commandLine);
}
execSync(commandLine, { stdio: [0, 1, 2] });
