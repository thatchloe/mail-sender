import React from 'react';
import { createRoot } from 'react-dom/client';
import EmailWriterApp from './remixed-2c91cdd9-3.tsx';
import './src/index.css';

window.claude = {
  complete: async (prompt) => {
    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    return data.email;
  }
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmailWriterApp />
  </React.StrictMode>
); 