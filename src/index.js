import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
// basename = 'goit-react-hw-08-phonebook-RTKQuery';
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  // </React.StrictMode>,
  document.getElementById('root')
);
