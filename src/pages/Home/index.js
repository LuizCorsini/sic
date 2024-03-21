import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tabbed from './componentes/Tabbet';
import Header from './componentes/Header'


function Home() {

    return (

        <Container fluid>
            <Header />
            <Tabbed />
        </Container>
    );
};

export default Home;