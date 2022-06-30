import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename = 'react-eliftech-denismalniev'>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  // </React.StrictMode>,
  document.getElementById('root')
);
