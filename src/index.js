import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global/global.scss';
// eslint-disable-next-line
import { Analytics } from '@vercel/analytics/react';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
);
