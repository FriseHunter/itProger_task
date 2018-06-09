import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Field from './Events/Events';


const mainEl = document.getElementById('root');

ReactDOM.render(
<div className="container">
    <App />
    <Field/>
</div>,
 mainEl);
registerServiceWorker();
