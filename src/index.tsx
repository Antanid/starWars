import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  // @ts-ignore
    <App store={store}/>
);
