import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'postcss';
import { BrowserRouter } from 'react-router-dom';
import { fromJSON } from 'postcss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

