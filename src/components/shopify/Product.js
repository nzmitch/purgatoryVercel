import React, { Component } from "react";
import { useEffect } from "react";
import VariantSelector from "./VariantSelector";
import Client from "shopify-buy";
class Product extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        this.props.product.options.forEach(selector => {
            defaultOptionValues[selector.name] = selector.values[0].value;
        });
        this.state = { selectedOptions: defaultOptionValues };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
        const client = Client.buildClient({
            storefrontAccessToken: "0bbc3a52d138cea6fcd9e42861d75c3a",
            domain: "notypo.myshopify.com"
        });

        const checkoutId = localStorage.getItem("checkoutId");
        client.checkout.fetch(checkoutId).then(checkout => {
            if (checkout.lineItems.length > 0) {
                for (var i = 0; i < checkout.lineItems.length; i++) {
                    let variant =
                        this.state.selectedVariant ||
                        this.props.product.variants[0];
                    let variantQuantity =
                        this.state.selectedVariantQuantity || 0;
                    this.props.addVariantToCart(variant.id, variantQuantity);
                }
            }
        });
    }

    findImage(images, variantId) {
        const primary = images[0];

        const image = images.filter(function(image) {
            return image.variant_ids.includes(variantId);
        })[0];

        return (image || primary).src;
    }

    handleOptionChange(event) {
        const target = event.target;
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = this.props.client.product.helpers.variantForOptions(
            this.props.product,
            selectedOptions
        );

        let button;

        if (!selectedVariant.available) {
            button = (
                <button
                    className="Product__buy button"
                    disabled
                    onClick={() =>
                        this.props.addVariantToCart(
                            this.props.variant.id,
                            this.props.variantQuantity
                        )
                    }
                >
                    Sold Out
                </button>
            );
        } else {
            button = (
                <button
                    className="Product__buy button"
                    onClick={() =>
                        this.props.addVariantToCart(
                            this.props.variant.id,
                            this.props.variantQuantity
                        )
                    }
                >
                    Add to Cart
                </button>
            );
        }

        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image
        });
    }

    handleQuantityChange(event) {
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }

    render() {
        let selectedOptions = this.state.selectedOptions;
        const selectedVariant = this.props.client.product.helpers.variantForOptions(
            this.props.product,
            selectedOptions
        );
        let button;
        if (!selectedVariant.available) {
            button = (
                <button
                    className="Product__buy button"
                    disabled
                    onClick={() =>
                        this.props.addVariantToCart(variant.id, variantQuantity)
                    }
                >
                    Sold Out
                </button>
            );
        } else {
            button = (
                <button
                    className="Product__buy button"
                    onClick={() =>
                        this.props.addVariantToCart(variant.id, variantQuantity)
                    }
                >
                    Add to Cart
                </button>
            );
        }

        let variantImage =
            this.state.selectedVariantImage || this.props.product.images[0];
        let variant =
            this.state.selectedVariant || this.props.product.variants[0];
        let variantQuantity = this.state.selectedVariantQuantity || 1;
        let variantSelectors = this.props.product.options.map(option => {
            return (
                <VariantSelector
                    handleOptionChange={this.handleOptionChange}
                    key={option.id.toString()}
                    option={option}
                />
            );
        });
        return (
            <div className="Product">
                {this.props.product.images.length ? (
                    <a href={this.props.product.title.replace(/\s+/g, "")}>
                        <img
                            className="product_img"
                            src={variantImage.src}
                            alt={"${this.props.product.title} product shot"}
                        />
                    </a>
                ) : null}
                <h5 className="Product_title">{this.props.product.title}</h5>
                <span className="Product_price">${variant.price}</span>
            </div>
        );
    }
}

export default Product;
