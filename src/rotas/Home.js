import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from '../componentes/Searcth';
import Navigation from '../componentes/NavHome';
import Tabbed from '../componentes/Tabbed';


function GradesComponentes() {

    return (

        <Container fluid>
            <Row>
                <Col>
                    <Navigation />
                </Col>
                <Col xs={3}>
                    <SearchForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabbed />
                </Col>
            </Row>
        </Container>
    );
};

export default GradesComponentes;