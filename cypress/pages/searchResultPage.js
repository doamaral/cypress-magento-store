/* eslint-disable require-jsdoc */
class SearchResultPage {
  get searchTitle() {
    return cy.get('[data-ui-id="page-title-wrapper"]');
  }

  get noResultsfoundField() {
    return cy.get('main div.message');
  }

  get expectedNoResultsfoundMessage() {
    return 'Your search returned no results.';
  }
}
export default new SearchResultPage();
