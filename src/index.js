import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//add applyMiddleware when importing middleware such as thunk
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';


//hook in redux dev tools for chrome browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//hook up middleware to redux store
const store = createStore( reducers, composeEnhancers( applyMiddleware( thunk ) ) );

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));
