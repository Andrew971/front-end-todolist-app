import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './Assets/css/styles.css';
import App from './Components/App';



render(
    <Router><Route path="/" component={App}/></Router>, document.getElementById('root'));

