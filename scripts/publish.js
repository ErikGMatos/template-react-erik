const { execSync } = require('child_process');

// const { existingCountries, inquirerInit } = require('./config');

// const arg = process.argv[2];
// const exists = existingCountries.includes(arg);
const commandLine = `yarn hml && yarn prd`;
// if (!exists) {
//   return inquirerInit(existingCountries, commandLine, arg, true);
// }
execSync(commandLine, { stdio: [0, 1, 2] });
