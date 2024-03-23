/* eslint-disable require-jsdoc */
class HomePage {
  get productsSession() {
    return 'div.block-products-list';
  }

  get productItems() {
    return 'ol.widget-product-grid li.product-item';
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

  getProductByName(expectedProductName, click) {
    cy.get(this.productItems)
        .find(this.productItemDetailNameLocator)
        .contains(expectedProductName)
        .parents('div.product-item-info').as('product');
    if (click) cy.get('@product').click();
  }

  selectSize(size) {
    cy.get('@product')
        .find(this.productItemDetailSizesLocator)
        .find(`div[option-label="${size}"]`)
        .click();
  }

  selectColor(color) {
    cy.get('@product')
        .find(this.productItemDetailColorsLocator)
        .find(`div[option-label="${color}"]`)
        .click();
  }

  addProductToTheCartFromHomePage(expectedProductName) {
    this.getProductByName(expectedProductName, false);
    this.selectSize('XL');
    this.selectColor('Blue');
  }
}
export default new HomePage();
