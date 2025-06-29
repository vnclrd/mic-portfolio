import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This will be your Tailwind CSS setup if you use it globally

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);