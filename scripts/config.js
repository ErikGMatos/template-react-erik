/* eslint no-console: ["error", { allow: ["log"] }] */
const { execSync } = require('child_process');
const inquirer = require('inquirer');

const infoCountry = {
  'pt-br': {
    lang: 'pt',
    alpha2Code: 'BR',
    country: 'Brazil',
  },
  'es-co': {
    lang: 'es',
    alpha2Code: 'CO',
    country: 'Colombia',
  },
  'es-ar': {
    lang: 'es',
    alpha2Code: 'AR',
    country: 'Argentina',
  },
};

const existingCountries = Object.entries(infoCountry).map(([item]) => item);

const i18n = () => {
  const { translate } = process.env;
  return infoCountry[translate];
};

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    crimson: '\x1b[38m',
  },
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    crimson: '\x1b[48m',
  },
};

const messageError = arg => {
  process.on('exit', errorId => {
    if (errorId === 0)
      return console.log(
        colors.bg.green,
        colors.fg.black,
        `SUCESSO!!!  ${colors.reset}\n`
      );
    console.log(
      colors.fg.red,
      'NÂO FOI POSSÍVEL ENCONTRAR',
      colors.reverse,
      `${arg ? arg.toUpperCase() : arg}`,
      colors.reset,
      colors.fg.red,
      'NA LISTA DE IDIOMAS VÁLIDOS.\n'
    );
    console.log(
      colors.bg.green,
      colors.fg.black,
      `É NECESSÀRIO ESCOLHER UM DOS SEGUINTES IDIOMAS:${colors.reset}\n`
    );
    const countryArray = Object.entries(infoCountry).map(([item]) => item);
    countryArray.forEach(c =>
      console.log(colors.bg.red, colors.fg.white, `${c}  ${colors.reset}\n`)
    );
  });
};

const inquirerInit = (countries, commandLine, arg, allBuild = false) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'country',
        message: `${colors.fg.red}Choose the country to generate the translation file from the options below:${colors.reset}`,
        choices: countries,
        suffix: `${colors.fg.red} <<<${colors.reset}`,
        prefix: `${colors.fg.red}>>>${colors.reset}`,
      },
    ])
    .then(answers => {
      let newCommandLine = commandLine;
      if (allBuild) {
        const regex = new RegExp(String(arg), 'g');
        const textAllBuild = commandLine.match(regex);
        if (textAllBuild) {
          textAllBuild.forEach(item => {
            const textReplace = newCommandLine.replace(item, answers.country);
            newCommandLine = textReplace;
          });
        }
      } else {
        const text = /translate=(\w*[-]?\w*)/.exec(commandLine)[1];
        if (text) newCommandLine = commandLine.replace(text, answers.country);
      }
      console.log(
        `\n${colors.reset}${colors.fg.magenta}${newCommandLine}${colors.reset}${colors.fg.yellow}\n`
      );
      console.log(`${colors.fg.green}waiting building...  ${colors.reset}\n`);
      execSync(newCommandLine, { stdio: [0, 1, 2] });
    })
    .catch(err => {
      if (err) return false;
    });
};
module.exports = { messageError, i18n, existingCountries, inquirerInit };
