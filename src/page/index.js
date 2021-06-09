import React from 'react';
import ReactDOM from 'react-dom';

import 'framework7/css/framework7.bundle.css';

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7React from 'framework7-react';
Framework7.use(Framework7React)

import App from './components/app/app.component.js';

import'./browser.css';
ReactDOM.render(<App />, document.getElementById('root'));

