import React from 'react';
import ReactDOM  from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ThemeProvider>
          <RoutesApp />
          <ThemeProvider />
        </ThemeProvider>
    </AuthProvider>
  );