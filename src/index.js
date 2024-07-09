import React from 'react';
import ReactDOM from 'react-dom/client';
import './Activos/Css/index.css'; //la dirección debe ser actualizada a la nueva carpeta que contenga los archivos.css
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //toma el id Root de index.html en public
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
