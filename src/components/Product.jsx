import React from 'react';
import aqua from '../images/products/aqua.png';
import daniel from '../images/avatars/daniel.jpg';

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={aqua} alt="product" />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={daniel}
              alt='avatar'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
