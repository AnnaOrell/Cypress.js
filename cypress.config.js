const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 932,
    viewportWidth: 687,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"https://login.qa.studio"
  },
});
