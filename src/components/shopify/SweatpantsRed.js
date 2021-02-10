import React, { Component } from 'react';
import Product from './ProductVar';
import Scene from '../three/SweatpantsRedModel.js'

class SweatpantsRed extends Component {
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
        {products[4]}
      </div>
    );
  }
}

export default SweatpantsRed;
