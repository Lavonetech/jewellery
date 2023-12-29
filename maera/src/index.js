import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import{configureStore} from '@reduxjs/toolkit'
import globalReducer from './admin/state/index';
import {Provider} from 'react-redux';


const store=configureStore({
  reducer:{
    global:globalReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
 
  </React.StrictMode>
);




