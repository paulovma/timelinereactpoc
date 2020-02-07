import React, { Component } from "react"
import axios from 'axios';

import Photo from './Photo';

class Header extends Component {

    render() {
        return (
            <header class="header container">
                <h1 class="header-logo">
                    Instalura
                </h1>

                <form lpformnum="1" class="header-busca">
                    <input type="text" name="search" placeholder="Pesquisa" class="header-busca-campo" /><input type="submit" value="Buscar" class="header-busca-submit"/>
                </form>


                <nav>
                    <ul class="header-nav">
                    <li class="header-nav-item">
                        <a href="#">
                        ♡
                        {/*<!--                 ♥-->*/}
                        {/*<!--Quem deu like nas minhas fotos?-->*/}
                        </a>
                    </li>
                    </ul>
                </nav>
            </header>

        )
    }
}

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = {photos: []};
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/feed/posts?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
            .then(response => this.setState({photos: response.data.photos}));
    }
    
    render() {
        return (
            <div data-reactroot="" class="main">
                <Header />
                <div class="fotos container">
                    {
                        this.state.photos.map(data => <Photo key={data.id} item={data} />)
                    }
                </div>
            </div>
        );
    }
}