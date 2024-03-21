import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import Login from './rotas/login';
import FazendaFederal from './rotas/FazendaFederal';
import FazendaEstadual from './rotas/FazendaEstadual';
import FazendaMunicipal from './rotas/FazendaMunicipal';
import JusticaTrabalhista from './rotas/JusticaTrabalhista';
import TJMG from './rotas/tjmg';
import TRF6 from './rotas/trf6';
import Header from './componentes/Header';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './componentes/Footer/'
import { Container } from 'react-bootstrap';


const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <BrowserRouter>
      <Header />
      <Container>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/fazendafederal' element={<FazendaFederal />} />
        <Route path='/fazendaestadual' element={<FazendaEstadual />} />
        <Route path='/fazendamunicipal' element={<FazendaMunicipal />} />
        <Route path='/justicatrabalhista' element={<JusticaTrabalhista />} />
        <Route path='/tjmg' element={<TJMG />} />
        <Route path='/trf6' element={<TRF6 />} />
      </Routes>
      </Container>
      <Footer />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();