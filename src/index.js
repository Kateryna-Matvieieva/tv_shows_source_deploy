import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store'
import { Provider } from 'react-redux';

console.log('store ', store)
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

fetch(`https://api.themoviedb.org/3/tv/44217/recommendations?page=2&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`)
          .then(res => {
           console.log(res.json())})

serviceWorker.unregister();
