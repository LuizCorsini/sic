import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tabbed from './components/Tabbet';
import Header from './components/Header'
import Navigation from '../../componentes/Navigation';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    margin-top: 100px;
`

function Home() {

    return (

        <React.Fragment>
            <Header />
            <StyledContainer fluid="lg">
                <Navigation />
                <Tabbed />
            </StyledContainer>
        </React.Fragment>
    );
};

export default Home;