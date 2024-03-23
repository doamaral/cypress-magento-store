/* eslint-disable new-cap */
import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../../pages/homePage';

let SELECTED_PRODUCT_ITEM;

Given('I scroll to hot sellers products on the home page', () => {
  homePage.productsSession.scrollIntoView();
});

When('I select a hot seller product', () => {
  SELECTED_PRODUCT_ITEM = 'Radiant Tee';
});

Then('Add to the cart from homepage', () => {
  homePage.addProductToTheCartFromHomePage(SELECTED_PRODUCT_ITEM);
});
