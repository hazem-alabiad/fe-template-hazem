/* eslint-disable */
const fs = require("fs");
const chalk = require("chalk");

const en = require("./en.json");
const tr = require("./tr.json");

const successLog = (message) => console.log(chalk.green(message));
const errorLog = (message) => console.log(chalk.red(message));
const warningLog = (message) => console.log(chalk.yellow(message));

const syncLocales = (en, tr, writeToFile = true, log = true) => {
  if (Object.keys(en).length === Object.keys(tr).length) {
    log && successLog("Turkish translations are up to date ✅");
    return {};
  }

  let missedCounter = 1;

  log && console.log("Checking for missing translations...⌛️");

  const updatedTr = Object.entries(en).map(
    ([key, value]) => {
      if (key in tr) {
        return { [key]: tr[key] };
      }
      log && warningLog(`${missedCounter++}. "${key}": "${value}"`)
      return { [key]: `${value} [REVIEW]` };
    }).reduce((accumulator, item) => ({ ...accumulator, ...item }), {})

  if (!writeToFile) {
    return updatedTr;
  }

  fs.writeFile("src/lang/tr.json", JSON.stringify(updatedTr, null, 2) + "\n", (err) => {
    if (err) {
      errorLog("Error writing file! 😣", err);
      return;
    }
  });
  log && successLog("Turkish translations are up to date ✅ enjoy! 🎉")
};

syncLocales(en, tr);

module.exports = {
  syncLocales,
}
