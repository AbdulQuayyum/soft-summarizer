import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import { Background } from "./Theme/Index.jsx"
import { Store } from './Services/Store.js';
import { ThemeProvider } from './Contexts/ThemeContext.jsx';
import App from './App.jsx'
import "./Styles/Index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Background>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Background>
    </Provider>
  </React.StrictMode>,
)
