/* eslint-disable require-jsdoc */
class HomePage {
  get productsSession() {
    return cy.get('div.block-products-list');
  }

  get productItems() {
    return cy.get('ol.widget-product-grid li.product-item');
  }

  get productItemDetailNameLocator() {
    return 'div.product-item-details strong.product-item-name';
  }

  get productItemDetailSizesLocator() {
    return 'div.product-item-details div[attribute-code="size"]';
  }

  get productItemDetailColorsLocator() {
    return 'div.product-item-details div.swatch-attribute.color';
  }

  getProductByName(expectedProductName) {
    return this.productItems
        .find(this.productItemDetailNameLocator)
        .contains(expectedProductName)
        .parents('div.product-item-info');
  }

  selectSize(product, size) {
    product
        .find(this.productItemDetailSizesLocator)
        .find(`div[option-label="${size}"]`)
        .click();
  }

  selectColor(product, color) {
    product
        .find(this.productItemDetailColorsLocator)
        .find(`div[option-label="${color}"]`)
        .click();
  }

  addProductToTheCartFromHomePage(expectedProductName) {
    const chosenProduct = this.getProductByName(expectedProductName);
    this.selectSize(chosenProduct, 'XL');
    // TODO: Select Color and Add to Cart
  }
}
export default new HomePage();
