import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Reports from './pages/Reports';
//import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SignIn from './pages/Signin';


// const GlobalStyle = createGlobalStyle`
//     body {
//       margin: 0;
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//         'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//         sans-serif;
//       -webkit-font-smoothing: antialiased;
//       -moz-osx-font-smoothing: grayscale;
//       background-color: #F9F9F9;
//     }

//     code {
//       font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//         monospace;
//     }

// `

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

/*
        <Route path='/' element={<Login />} />

        <Route path='/fazendaestadual' element={<FazendaEstadual />} />
        <Route path='/fazendamunicipal' element={<FazendaMunicipal />} />
        <Route path='/justicatrabalhista' element={<JusticaTrabalhista />} />
        <Route path='/tjmg' element={<TJMG />} />
        <Route path='/trf6' element={<TRF6 />} />
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
