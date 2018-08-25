import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();