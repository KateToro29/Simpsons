import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import './index.css'
//import { BrowserRouter } from 'react-router-dom'

document.body.innerHTML = '<div id="app"></div>';

// Renderiza tu componente React en su lugar
const root = createRoot(document.getElementById('app'));
root.render(
<React.StrictMode>
  <App />
</React.StrictMode>);

