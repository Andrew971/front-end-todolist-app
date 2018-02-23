import React from 'react';
import { render } from 'react-dom';

import './Assets/css/styles.css';
import App from './Components/App';


import registerServiceWorker from './registerServiceWorker';

render(
    <App />, document.getElementById('root'));

registerServiceWorker();
