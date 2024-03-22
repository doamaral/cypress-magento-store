/* eslint-disable new-cap */
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import searchBarComponent from '../../../pages/components/searchBarComponent';
import searchResultPage from '../../../pages/searchResultPage';

const EXISTING_SEARCH_TERM = 'Watch';
// const NON_EXISTING_SEARCH_TERM = `xyzzyx`;

Given('I want to search a product', () => {
  cy.visit('/');
});

When('I enter the search term', () => {
  searchBarComponent.startSearch(EXISTING_SEARCH_TERM);
});

Then('an autocomplete list is displayed', () => {
  searchBarComponent.autoCompleteItems.should('be.visible');
});

And('I can pick the first sugestion from the list', () => {
  searchBarComponent.selectNthResult(1);
  searchResultPage.searchTitle.invoke('text').then( (text) => {
    expect(text).to.include('Search results for');
    expect(text).to.include(EXISTING_SEARCH_TERM.toLowerCase());
  });
});
