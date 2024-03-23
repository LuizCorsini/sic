import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../imagens/logo.png'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Row, Col, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: hsl(29, 100%, 66%);
    transition: transform 0.3s, color 0.3s;
    &:hover {
        transform: scale(1.1);
        color: rgb(255, 123, 0);
    }
`;

function Header({ name, ...props }){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <Navbar fixed='top' expand="lg" className="mb-3 bg-dark">
            <Container fluid="lg">
                <Navbar.Brand href='#'>
                    <img
                    alt="logo sic"
                    src={Logo}
                    width="90"
                    className="d-inline-block"/>
                </Navbar.Brand>
                    <Row>
                        <Col sm={5}>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="auto" className="me-1">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className='bg-light' type="text" placeholder="Pesquisar" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md="auto" className="me-1">      
                            <StyledFontAwesomeIcon 
                                icon={faBell}
                                onClick={handleShow}
                                className="me-1"
                                size="2x"
                            />
                        <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Mensagens</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            Futuras Mensagens Serão exibidas aqui...
                            </Offcanvas.Body>
                        </Offcanvas>
                        </Col>
                        <Col className="me-1">
                            <StyledFontAwesomeIcon
                                icon={faUserCircle}
                                onClick={handleShow}
                                className="me-1"
                                size="2x"
                                />
                            <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>PERFIL</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                <Nav.Link href="#action1">Meus Dados</Nav.Link>
                                <Nav.Link href="#action2">Sair</Nav.Link>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                    </Row> 
            </Container>
        </Navbar>

        

    )
};


export default Header;