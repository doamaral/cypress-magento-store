const cucumber = require('cypress-cucumber-preprocessor').default;
const {defineConfig} = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: process.env.BASE_URL || 'https://magento.softwaretestingboard.com',
  },
});
