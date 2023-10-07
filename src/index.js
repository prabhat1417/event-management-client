import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
      domain="dev-cenfq60pwmmph4gp.us.auth0.com"
      clientId="uLusNRjVmrqO25yeJcGxBicu5K7EVC2e"
      authorizationParams={{
      redirect_uri: window.location.origin
      }}
    >
      <App />
  </Auth0Provider>,
    </BrowserRouter>
  </React.StrictMode>
);
