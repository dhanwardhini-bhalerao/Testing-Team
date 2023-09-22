const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kr7vyr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
