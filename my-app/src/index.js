import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppJSX from './AppJSX';
import reportWebVitals from './reportWebVitals';
import AppProfile from "./AppProfile";
import AppCounter from "./AppCounter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCounter />
  </React.StrictMode>
);

