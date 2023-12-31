import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <StyledEngineProvider injectFirst> 
    <App />    
   </StyledEngineProvider>
  </React.StrictMode>
=======
  <StyledEngineProvider injectFirst> 

  <App />

   
 </StyledEngineProvider>
>>>>>>> e3a7761652c5689c52592022607a9cd09bad20a8
);
