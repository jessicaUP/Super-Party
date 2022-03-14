import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import App from './app.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




