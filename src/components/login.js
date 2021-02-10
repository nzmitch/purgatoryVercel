import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "",
                user_password: ""
            }
        };
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };

    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_password === "123") {
            localStorage.setItem("token", "T");
            this.setState({
                islogged: true
            });
        }
        event.preventDefault();
    };
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/shop" />;
        }
        return (
            <div>
            
            <div className="container">
                <form onSubmit={this.login} className="form-signin">
                
                    <div className="row">
                        <div className="col">
                            <img className="loginLogo" src={require('../img/OGLogoBlack.png')} />
                            <input
                                type="password"
                                name="user_password"
                                onChange={this.handleFormChange}
                                placeholder="Enter Password"
                            />
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                   
                </form>
            </div>
            </div>
        );
    }
}
export default Login;
