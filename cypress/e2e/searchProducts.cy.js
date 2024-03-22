import searchBarComponent from "../pages/components/searchBarComponent"
import searchResultPage from "../pages/searchResultPage"

describe('User wants to Search for a product', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const EXISTING_SEARCH_TERM = 'Watch'
  const NON_EXISTING_SEARCH_TERM = `xyzzyx`

  it('user search for existing product on the store', () => {
    searchBarComponent.startSearch(EXISTING_SEARCH_TERM)
    searchBarComponent.autoCompleteItems.should('be.visible')
    searchBarComponent.selectNthResult(1)
    searchResultPage.searchTitle.invoke('text').then( text => {
      expect(text).to.include('Search results for')
      expect(text).to.include(EXISTING_SEARCH_TERM.toLowerCase())
    })
  })

  it('user search for non existing product on the store', () => {
    searchBarComponent.searchAndSubmit(NON_EXISTING_SEARCH_TERM)
    searchResultPage.searchTitle.should('contain', 'Search results for')
    searchResultPage.searchTitle.should('contain', NON_EXISTING_SEARCH_TERM.toLowerCase())
    
    searchResultPage.noResultsfoundField.should('be.visible')
    searchResultPage.noResultsfoundField.should('contain', searchResultPage.expectedNoResultsfoundMessage)
  })
})