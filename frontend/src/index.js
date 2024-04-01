import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Reports from './pages/Reports';
import GuestRoute from './routes/GuestRoute';
import SignIn from './pages/Signin';
import './mock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/guest' element={<GuestRoute />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
