import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
=======
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
>>>>>>> 6a343bd2765c2db80c287955ea89e6df5a5a878c

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
    </BrowserRouter>
  </React.StrictMode>,
=======
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 6a343bd2765c2db80c287955ea89e6df5a5a878c
);
