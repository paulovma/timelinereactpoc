import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {msg: ''}
    }

    envia(event) {
        event.preventDefault();
        const { history } = this.props;
        const requestInfo = {
            login: this.login.value,
            password: this.password.value
        }
        axios.post("http://localhost:3000/feed/login", requestInfo, {'headers': {'Content-type': 'application/json'}})
            .then(response => response.data)
            .then(data =>  {
                localStorage.setItem('auth-token', data.cookie)
                history.push("/timeline")
            })
            .catch(error => this.setState({msg: error.message}));
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="password" ref={(input) => this.password = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}