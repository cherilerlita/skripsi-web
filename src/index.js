// Manggil Package
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Manggil Export
import LoginForm from './page/loginForm.component';
import RegisForm from './page/regisForm.component';
import App from './App';

// Manggil CSS
import './index.css';

// BUAT RENDER DARI INDEX HTML
// CARANYA DIA MANIPULASI YANG PUNYA ID ROOT

// INI ANALOGI
// ReactDOM.render(x, y);
ReactDOM.render(
  // x
  <BrowserRouter>
    <Routes>
      {/* Jalur 1 --> Ngebuka diawal path="/" --> LoginForm */}
      <Route
        exact
        path="/"
        element={
          <App>
            <LoginForm />
          </App>
        }
      />

      {/* Jalur 2 --> Ngebuka regis path="/regis" */}
      <Route
        exact
        path="/regis"
        element={
          <App>
            <RegisForm />
          </App>
        }
      />

      {/* Jalur 3 --> Ngebuka login path="/login" */}
      <Route
        exact
        path="/login"
        element={
          <App>
            <LoginForm />
          </App>
        }
      />
    </Routes>
  </BrowserRouter>,
  // y
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
