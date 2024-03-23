# Cypress Testing sample project
![project status](https://github.com/doamaral/cypress-magento-store/workflows/Run%20E2E%20tests%20for%20Magento%20Store%20Project/badge.svg)

This project uses Cypress with Cucumber to automate test scenarios for a sample e-commerce online shop. It's also using Page Objects Model Pattern to deal with pages and components throughout the application.
It's running Github Actions for each update to `master` branch

## Project Setup
- Clone this repo and navigate to the folder
- Rename the `.env.sample` file to `.env`
- Set expected values for each environment variable in `.env`
- run `npm install` to install all project dependencies

## Running tests
### Running headless
- `npm test`

### Running on Cypress GUI
- `npm run open`

## Dev
To improve your dev experience consider using:
- VSCode
- [Cucumber Gherkin VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
- [ESLint VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## References
- https://www.npmjs.com/package/cypress-cucumber-preprocessor
- https://docs.cypress.io/guides/overview/why-cypress
- https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide
- https://www.youtube.com/watch?v=UMFAreP1grE
- https://github.com/cypress-io/github-action
- https://docs.cypress.io/guides/continuous-integration/github-actions
