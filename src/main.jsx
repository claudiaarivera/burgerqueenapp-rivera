import React from 'react';
import ReactDOM from 'react-dom/client';
import BurgerQueenApp from './BurgerQueenApp';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './assets/scss/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BurgerQueenApp />
    </BrowserRouter>
  </React.StrictMode>
)
