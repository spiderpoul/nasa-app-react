import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const reduxDevTools = (window as any)?.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(rootReducer, {}, reduxDevTools && reduxDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
