import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Block from './Description';
import App from './App';
import Game from "./Game/Game";
import Events from './Events/Events'
import registerServiceWorker from './registerServiceWorker';


const mainEl = document.getElementById('root');

ReactDOM.render(
<div className="container">
    <App />
    <Block/>
    <div className="d-flex">
        <Game className="game" name='Road Rage 3' age='12+'/>
        <Game className="game" name='Dune' age='8+'/>
        <Game className="game" name='Ultimate Mortal Combat 3' age='14+'/>
        <Game className="game" name='Sonic 3' age='7+'/>
    </div>
    <div className="d-flex">
    <Events>Купить картошки</Events>
    <Events>Постирать носки</Events>
    <Events>Погладить Яшу</Events>
    </div>
    <div className="d-flex">
    <Events>Сварить ужин</Events>
    </div>
</div>,
 mainEl);
registerServiceWorker();
