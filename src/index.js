import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import reactmd from 'react-md';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
		<App/>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
