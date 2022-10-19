import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1000,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
