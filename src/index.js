import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import App from './App';
import GlobalStyle from "./global.style";
import WebIconStyle from "./fonts.style";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle/>
      <WebIconStyle/>
      <App/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
