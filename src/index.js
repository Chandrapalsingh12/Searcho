import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContexs'

ReactDOM.render(
  <ResultContextProvider>

    <BrowserRouter>
      <App />

    </BrowserRouter>
  </ResultContextProvider>

  , document.getElementById('root')
);


