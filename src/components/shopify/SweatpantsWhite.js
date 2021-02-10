import React, { Component } from 'react';
import Product from './ProductVar';
import Scene from '../three/SweatpantsWhiteModel.js'

class SweatpantsWhite extends Component {
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
      <div className="ProductVar-wrapper">
        <Scene />
        {products[3]}
      </div>
    );
  }
}

export default SweatpantsWhite;
