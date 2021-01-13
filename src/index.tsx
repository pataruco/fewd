import React from 'react';
import { hydrate, render } from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/normalize.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

const { NODE_ENV } = process.env;

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>,
    rootElement,
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>,
    rootElement,
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (NODE_ENV === 'production') {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
