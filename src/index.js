import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//add applyMiddleware when importing middleware such as thunk
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

//hook up middleware to redux store
const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));
