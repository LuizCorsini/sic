import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBarLogo from "../Logo";
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import BtnCanvasPerfil from '../BtnPerfil';
import BtnCanvasEnvelope from '../BtnEnvelope';

const NavbarC = styled(Navbar)`
    background: rgb(240, 240, 240);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
 `;


function Header(){
    return(
        <NavbarC expand="lg" className=" mb-5 justify-content-between">
            <Container inline>
                <Link to="/">
                    <NavBarLogo />
                </Link>
                <Row>
                     <Col xs="auto">
                        <BtnCanvasEnvelope />
                    </Col>
                    <Col xs="auto">
                        <BtnCanvasPerfil />
                    </Col>
                </Row>
            </Container>
        </NavbarC>   
    )
};

export default Header;
