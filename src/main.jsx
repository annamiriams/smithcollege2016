import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter } from 'react-router-dom'; // ✅ use HashRouter for GitHub Pages
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
// Using HashRouter to ensure routing works correctly on GitHub Pages
// Using BrowserRouter for local development and other environments like netlify