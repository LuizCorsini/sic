import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Logo from '../../../imagens/logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Row, Col, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';


const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #FFF;
    transition: transform 0.3s, color 0.3s;
    &:hover {
        transform: scale(1.1);
        color:  ;
    }
`;

const StyledNavbar = styled(Navbar)`
    background-image: linear-gradient(to left, #ee8700f5, #a200ff ) ;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

function Header({ name, ...props }){
    
    const { signout } = useAuth();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <StyledNavbar fixed='top' expand="lg" className="mb-3">
                <Container fluid="lg">
                    <Navbar.Brand href='#'>
                        <img
                        alt="logo sic"
                        src={Logo}
                        width="90"
                        className="d-inline-block"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Row className="align-items-center">
                            <Col md={5} xs={12} className="mb-3 mb-md-0">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control className='bg-light' type="text" placeholder="Pesquisar" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={7} xs={12} className="d-flex justify-content-md-end">
                                <StyledFontAwesomeIcon 
                                    icon={faBell}
                                    onClick={handleShow}
                                    className="me-3"
                                    size="2x"
                                />
                                <StyledFontAwesomeIcon
                                    icon={faUserCircle}
                                    onClick={handleShow}
                                    className="me-3"
                                    size="2x"
                                />
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </StyledNavbar>

            <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mensagens</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Futuras Mensagens Serão exibidas aqui...
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;