import React, { Component } from "react";
import PhotoInfo from './PhotoInfo';

class Header extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <header class="foto-header">
                <figure class="foto-usuario">
                    <img src={this.props.item.urlPerfil} alt="foto do usuario" />
                    <figcaption class="foto-usuario">
                    <a href="#">
                        {this.props.item.loginUsuario}
                    </a>  
                    </figcaption>
                </figure>
                <time class="foto-data">{this.props.item.horario}</time>
            </header>
        );
    }
}

export default class Photo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div class="foto">
                <Header item={this.props.item}/>

                <img alt="foto" class="foto-src" src={this.props.item.urlPerfil} />

                <PhotoInfo item={this.props.item} />
                <section class="fotoAtualizacoes">
                <a href="#" class="fotoAtualizacoes-like">Likar</a>
                <form class="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." class="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" class="fotoAtualizacoes-form-submit" />
                </form>

                </section>
            </div>
        );
    }
}