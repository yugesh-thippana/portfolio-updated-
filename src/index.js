import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ContextFunction from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextFunction>
            <App />
        </ContextFunction>
    </React.StrictMode>
);
