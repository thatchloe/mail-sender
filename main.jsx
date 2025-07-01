import React from 'react';
import { createRoot } from 'react-dom/client';
import EmailWriterApp from './remixed-2c91cdd9-5.tsx';
import './src/index.css';

window.claude = {
  complete: async (prompt, apiKey, modelProvider) => {
    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, apiKey, modelProvider })
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.email;
  }
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmailWriterApp />
  </React.StrictMode>
); 