import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './global.css'

let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

ReactDOM.render(
    

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);