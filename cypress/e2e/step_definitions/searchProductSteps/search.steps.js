/* eslint-disable new-cap */
import {When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import searchBarComponent from '../../../pages/components/searchBarComponent';
import searchResultPage from '../../../pages/searchResultPage';

const EXISTING_SEARCH_TERM = 'Watch';
const NON_EXISTING_SEARCH_TERM = `xyzzyx`;

Given('I want to search a product', () => {
  cy.visit('/');
});

When('I enter the search term', () => {
  searchBarComponent.startSearch(EXISTING_SEARCH_TERM);
});

When('I enter the search term for non existing product', () => {
  searchBarComponent.searchAndSubmit(NON_EXISTING_SEARCH_TERM);
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

// page results says there is no match for this term
Then('page results says there is no match for this term', () => {
  searchResultPage.searchTitle.should('contain', 'Search results for');
  searchResultPage.searchTitle
      .should('contain', NON_EXISTING_SEARCH_TERM.toLowerCase());

  searchResultPage.noResultsfoundField.should('be.visible');
  searchResultPage.noResultsfoundField
      .should('contain', searchResultPage.expectedNoResultsfoundMessage);
});
