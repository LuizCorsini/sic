import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Brand from '../../../Logo'
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';


const NavbarC = styled(Navbar)`
    background: rgb(240, 240, 240);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
 `;


function Header(){
    return(
        <Nav>
            <Brand />

        </Nav>
    );
};

export default Header;