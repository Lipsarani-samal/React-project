import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as BR, BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";

import App from './App';
import './App.css';
import './index.css';
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor } from "./redux/store"; // Import the store and persistor

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
);

