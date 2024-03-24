/* eslint-disable new-cap */
import {And, When} from 'cypress-cucumber-preprocessor/steps';
import productDetailPage from '../../../pages/productDetailPage';

When('I set order detail', () => {
  productDetailPage.setOrderDetail();
});

And('Add to cart from product detail page', () => {
  productDetailPage.addToCart();
});
