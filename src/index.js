import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './assets/main.css';
import App from './components/App';
import rootReducer from './reducers/index';


render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
