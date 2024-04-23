import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId='474905505015-u4uj0inel4si0h63pcs3qsj8vlh93sgp.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);

