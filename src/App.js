import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Gallery from "./components/shopify/Gallery";
import Cart from "./components/shopify/Cart";
import LineItem from "./components/shopify/LineItem";



class App1 extends Component {
    constructor() {
        super();

        this.state = {
            isCartOpen: false,
            checkout: { lineItems: [] },
            products: [],
            shop: {},
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.handleCartClose = this.handleCartClose.bind(this);
        this.addVariantToCart = this.addVariantToCart.bind(this);
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
        this.updateVarInCart = this.updateVarInCart.bind(this);
    }

    componentWillMount() {
        const checkoutId = localStorage.getItem("checkoutId");
        if (checkoutId == null) {
            this.props.client.checkout.create().then(res => {
                localStorage.setItem("checkoutId", this.state.checkout.id);
                const checkoutId = this.state.checkout.id;
                this.setState({
                    checkout: res
                });
            });
        } else {
            this.props.client.checkout
                .fetch(checkoutId)
                .then(checkout => {
                    if (checkout.lineItems.length > 0) {
                        for (var i = 0; i < checkout.lineItems.length; i++) {
                            console.log("greater than 0");
                        }
                    }
                })
                .catch(err => {
                    this.props.client.checkout.create().then(checkout => {
                        localStorage.setItem("checkoutId", checkout.id);
                        const checkoutId = this.state.checkout.id;
                    });
                });
        }

        this.props.client.product.fetchAll().then(res => {
            this.setState({
                products: res
            });
        });

        this.props.client.shop.fetchInfo().then(res => {
            this.setState({
                shop: res
            });
        });
    }

    addVariantToCart(variantId, quantity) {
        this.setState({
            isCartOpen: false
        });

        const lineItemsToAdd = [
            { variantId, quantity: parseInt(quantity, 10) }
        ];
        const checkoutId = localStorage.getItem("checkoutId");
        return this.props.client.checkout
            .addLineItems(checkoutId, lineItemsToAdd)
            .then(res => {
                this.setState({
                    checkout: res
                });
            });
    }

    updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = localStorage.getItem("checkoutId");
        const lineItemsToUpdate = [
            { id: lineItemId, quantity: parseInt(quantity, 10) }
        ];

        return this.props.client.checkout
            .updateLineItems(checkoutId, lineItemsToUpdate)
            .then(res => {
                this.setState({
                    checkout: res
                });
            });
    }

    updateVarInCart(lineItemId, quantity) {
        const checkoutId = localStorage.getItem("checkoutId");
        const lineItemsToUpdate = [
            { id: lineItemId, quantity: parseInt(quantity, 10) }
        ];

        return this.props.client.checkout
            .updateLineItems(checkoutId, lineItemsToUpdate)
            .then(res => {
                this.setState({
                    checkout: res
                });
            });
    }

    removeLineItemInCart(lineItemId) {
        const checkoutId = localStorage.getItem("checkoutId");

        return this.props.client.checkout
            .removeLineItems(checkoutId, [lineItemId])
            .then(res => {
                this.setState({
                    checkout: res
                });
            });
    }

    handleCartClose() {
        this.setState({
            isCartOpen: false
        });
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true
        });
    }

    closeMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: false
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <div>
                       
                    </div>
                    {
                    !this.state.isCartOpen ? (
                    <div className="App__view-cart-wrapper">
                        <button
                            className="App__view-cart"
                            onClick={() => this.setState({ isCartOpen: true })}
                        >
                            Cart
                        </button>
                    </div>
                    ) : (
                        <div className="cart-placeholder"><button className="App__view-cart" style={{color: 'transparent',  outline: 'none'}}>Cart</button></div>
                        )
                    }
                </header>
                
                {
                    this.state.showMenu ? (
                    null
                        
                ) : (
                <Gallery
                    products={this.state.products}
                    client={this.props.client}
                    addVariantToCart={this.addVariantToCart}
                />
                        )
                    }

                <Cart
                    checkout={this.state.checkout}
                    isCartOpen={this.state.isCartOpen}
                    handleCartClose={this.handleCartClose}
                    updateQuantityInCart={this.updateQuantityInCart}
                    removeLineItemInCart={this.removeLineItemInCart}
                />
            </div>
        );
    }
}

export default App1;
