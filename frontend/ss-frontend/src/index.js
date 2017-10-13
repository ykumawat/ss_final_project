import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'

import contactsReducer from './reducers/contactsReducer'
import slidesReducer from './reducers/slidesReducer'
import usersReducer from './reducers/usersReducer'

const rootReducer = combineReducers({contacts: contactsReducer, slides: slidesReducer, user: usersReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// console.log(store.getState());
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
