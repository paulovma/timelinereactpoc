import React, { Component } from "react";

class Likes extends Component {

    render() {
        return(
            <div class="foto-info-likes">

                {
                    this.props.item.likers.map(liker => {
                        return (
                            <a key={liker.login} href="#">
                                {liker.login},
                            </a>
                        );
                    })
                }

                curtiram
                
            </div>

        );
    }
}

class Subtitle extends Component {

    render() {
        return (
            <p class="foto-info-legenda">
                <a class="foto-info-autor">autor </a>
                {this.props.item.comentario}
            </p>
        );
    }
}

class Comment extends Component {

    render() {
        return (
            <ul class="foto-info-comentarios">
                {
                    this.props.item.comentarios.map(comment => {
                        return (
                            <li key={comment.id} class="comentario">
                                <a class="foto-info-autor">{comment.login} </a>
                                {comment.texto}
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default class PhotoInfo extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <div class="foto-info">
                <Likes item={this.props.item}/>
                <Subtitle item={this.props.item} />
                <Comment item={this.props.item} />
            </div>
        );
    }
}