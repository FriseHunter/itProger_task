import React, { Component } from 'react';
import './Game.css';

class Game extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
            </div>
        );
    }
};

export default Game;