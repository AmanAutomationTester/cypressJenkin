const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "My Test Suite",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-failed-log/on')(on)
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
