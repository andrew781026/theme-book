import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./global.style";
import WebIconStyle from "./fonts.style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <WebIconStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
