import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './AppWrapper';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'prismjs/themes/prism-coy.css';
import generateStore from './redux/store'
import { Provider } from 'react-redux'

let store = generateStore()

ReactDOM.render(
	<Provider store={store} >
	<HashRouter>
		<AppWrapper></AppWrapper>
	</HashRouter>
	</Provider>,
	document.getElementById('root'),
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
