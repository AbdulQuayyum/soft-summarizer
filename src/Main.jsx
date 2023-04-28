import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import { Store } from './Services/Store.js';
import App from './App.jsx'
import "./Styles/Index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
