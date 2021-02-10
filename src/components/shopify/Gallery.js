import React, { Component } from 'react';
import Product from './Product';

class Gallery extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });
    
    return (
      <div className="Product-wrapper">
        {products}
      </div>
    );
  }
}

export default Gallery;
