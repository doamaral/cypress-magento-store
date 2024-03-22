/* eslint-disable require-jsdoc */
class SearchBarComponent {
  get searchInput() {
    return cy.get('#search');
  }

  get searchButton() {
    return cy.get('div.block-search form button');
  }

  get autoCompleteContainer() {
    return cy.get('#search_autocomplete');
  }
  get autoCompleteItems() {
    return this.autoCompleteContainer.find('li');
  }

  startSearch(searchValue) {
    this.searchInput.type(searchValue, {delay: 50});
  }

  searchAndSubmit(searchValue) {
    this.searchInput.type(searchValue);
    this.searchButton.click();
  }

  selectNthResult(n) {
    this.autoCompleteItems.then((items) => {
      if (items.length < n) {
        throw new Error('Out of bound.');
      }
    });
    this.autoCompleteItems.eq(n-1).click();
  }
}
export default new SearchBarComponent();
