import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { bracketApp } from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(bracketApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
