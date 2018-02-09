import React, { Component } from 'react';
import Product from './components/Product';
import logo from './logo.svg';

class ProductList extends Component {
  render() {
    return (
      <div className='ui unstackable items'>
        <Product />
      </div>
    );
  }
}

export default ProductList;
