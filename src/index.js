import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
		<MuiThemeProvider>
		    <App />
		</MuiThemeProvider>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
