import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import theme from './Themes/main';
import { Auth0Provider } from '@auth0/auth0-react';




ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <Auth0Provider
    domain="dev-fzddsstl.us.auth0.com"
    clientId="017eNNC3ps3GugXwLtDTWZ3OlwgFjIq5"
    redirectUri={window.location.origin}>
    <App ></App>
    </Auth0Provider>
  </ThemeProvider>
  
    
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
