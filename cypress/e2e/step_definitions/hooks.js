/* eslint-disable new-cap */
import {Before} from 'cypress-cucumber-preprocessor/steps';

Before(function() {
  cy.visit('/');
});
