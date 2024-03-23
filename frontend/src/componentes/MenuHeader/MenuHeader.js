import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarCustom = styled(Navbar)`
 margin-left:20px;
`

function Header() {
    const [showDropdown, setShowDropdown, expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
        setShowDropdown(!showDropdown)

    };

    return (
        <NavBarCustom expanded={expanded} onToggle={handleToggle} expand="lg" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse><FontAwesomeIcon
                icon={faEnvelope} >
                </FontAwesomeIcon>
                <Nav.Link as={Link} to="/mensagens"></Nav.Link>
                </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav" show={showDropdown} alignRight>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/mensagens"><FontAwesomeIcon 
                    icon={faEnvelope} 
                    size="lg"
                    style={{ color:'rgb(255, 123, 0)'}} /></Nav.Link>
                    <NavDropdown title={<FontAwesomeIcon 
                    icon={faUserCircle} 
                    size="lg" 
                    style={{ color:'rgb(255, 123, 0)'}} />} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/configuracoes">Configurações</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/logout">Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </NavBarCustom>
    );
}

export default Header;
