import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from '../reportWebVitals.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@nm/realgrid/dist/realgrid-style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
