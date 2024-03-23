/* eslint-disable new-cap */
import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../../pages/homePage';

let SELECTED_PRODUCT_ITEM_NAME;

Given('I scroll to hot sellers products on the home page', () => {
  cy.get(homePage.productsSession).scrollIntoView();
});

When('I see a hot seller product', () => {
  SELECTED_PRODUCT_ITEM_NAME = 'Radiant Tee';
});

When('I select a hot seller product', () => {
  SELECTED_PRODUCT_ITEM_NAME = 'Radiant Tee';
  homePage.getProductByName(SELECTED_PRODUCT_ITEM_NAME, true);
});

Then('Add to the cart from homepage', () => {
  homePage.addProductToTheCartFromHomePage(SELECTED_PRODUCT_ITEM_NAME);
});
