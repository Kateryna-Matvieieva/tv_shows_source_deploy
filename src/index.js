import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store'
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
