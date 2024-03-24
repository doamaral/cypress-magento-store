/* eslint-disable require-jsdoc */
class ProductDetailPage {
  get addToCartButton() {
    return '#product-addtocart-button';
  }

  get productItemDetailSizesLocator() {
    return 'div[attribute-code="size"]';
  }

  get productItemDetailColorsLocator() {
    return 'div.swatch-attribute.color';
  }

  selectSize(size) {
    cy.get(this.productItemDetailSizesLocator)
        .find(`div[option-label="${size}"]`)
        .click({force: true});
  }

  selectColor(color) {
    cy.get(this.productItemDetailColorsLocator)
        .find(`div[option-label="${color}"]`)
        .click({force: true});
  }

  setOrderDetail() {
    // TODO: Fix error when click Size and Color
    // this.selectSize('XL');
    // this.selectColor('Blue');
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
  }
}
export default new ProductDetailPage();
