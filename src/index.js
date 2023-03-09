import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header';


ReactDOM.render(
  <React.StrictMode>
    <Header name="Textutil" about="About Us" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

