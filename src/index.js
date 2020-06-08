import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {Provider} from "react-redux"
import {createStore} from "redux"
import { appReducer } from "./reducers/appReducer"

//Step 1 Create store using createStore, pass in reducer function
const store = createStore(appReducer);
console.log("current state:", store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 rootElement);
