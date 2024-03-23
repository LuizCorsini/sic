import React from 'react';
import { Container } from 'react-bootstrap';
import Tabbed from './components/Tabbet';
import Header from './components/Header'
import Navigation from '../../componentes/Navigation';
import styled from 'styled-components';
import Footer from '../../componentes/Footer';

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
            <Footer />
        </React.Fragment>
    );
};

export default Home;