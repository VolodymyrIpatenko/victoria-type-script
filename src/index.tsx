import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import  DarkModeProvider from './components/context/DarkModeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeProvider>
    <BreakpointProvider>
      <BrowserRouter>
      <App/>
    </BrowserRouter>
    </BreakpointProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
