import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers/root.reducer';
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

export const history = createBrowserHistory()
const store = createStore(rootReducer(history),applyMiddleware( routerMiddleware(history)));


ReactDOM.render(
<Provider store={store}>
<ConnectedRouter history={history}>
<App />
</ConnectedRouter>

</Provider>

, 

document.getElementById('root'));
