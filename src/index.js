import React from "react";
import "./app.css";
import App1 from './App.js'
import HoodieBlackApp from './HoodieBlackApp.js'
import HoodieWhiteApp from './HoodieWhiteApp.js'
import SweatpantsBlackApp from './sweatpantsBlackApp.js'
import SweatpantsWhiteApp from './sweatpantsWhiteApp.js'
import SweatpantsRedApp from './sweatpantsRedApp.js'
import ShirtRedApp from './shirtRedApp.js'
import Client from 'shopify-buy';
import { NavLink, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Login from './components/login';
import FaqApp from './components/faq';

const client = Client.buildClient({
  storefrontAccessToken: '0bbc3a52d138cea6fcd9e42861d75c3a',
  domain: 'notypo.myshopify.com'
});


const IndexPage = () => {
    return (
        <div>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
        </div>
    );
};

const Pixi = () => (
    <div className="home">
        <Login />
    </div>
);

const shop = () => (
    <div className="about">   
        <App1 client={client}/>  
    </div>
);

const HoodieBlack = () => (
    <div className="about">   
        <HoodieBlackApp client={client}/>  
    </div>
);

const HoodieWhite = () => (
    <div className="about">   
        <HoodieWhiteApp client={client}/>  
    </div>
);

const sweatpantsBlack = () => (
    <div className="about">   
        <SweatpantsBlackApp client={client}/>  
    </div>
);

const sweatpantsWhite = () => (
    <div className="about">   
        <SweatpantsWhiteApp client={client}/>  
    </div>
);

const sweatpantsRed = () => (
    <div className="about">   
        <SweatpantsRedApp client={client}/>  
    </div>
);

const shirtRed = () => (
    <div className="about">   
        <ShirtRedApp client={client}/>  
    </div>
);

const faq = () => (
    <div className="about">   
        <FaqApp />  
    </div>
);

const Main = () => (
    <Switch>
        <Route exact path="/" component={Pixi}></Route>
        <Route exact path="/shop" component={shop}></Route>
        <Route exact path="/OGBLACKPURGATORYHOODIE" component={HoodieBlack}></Route>
        <Route exact path="/OGWHITEPURGATORYHOODIE" component={HoodieWhite}></Route>
        <Route exact path="/BLACKPURGATORYSKULLSWEATPANTS" component={sweatpantsBlack}></Route>
        <Route exact path="/WHITEPURGATORYSKULLSWEATPANTS" component={sweatpantsWhite}></Route>
        <Route exact path="/REDPURGATORYSPIDERSWEATPANTS" component={sweatpantsRed}></Route>
        <Route exact path="/REDPURGATORYSPIDERTEE" component={shirtRed}></Route>
        <Route exact path="/faq" component={faq}></Route>
    </Switch>
);

ReactDOM.render(<IndexPage />, document.getElementById("root"));














