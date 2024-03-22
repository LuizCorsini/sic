import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// Definindo a animação de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledNavLink = styled(Nav.Link)`
  padding: ${props => props.espacamento || '10px'};
  border-radius: 5px;
  border: 1px solid rgba(189, 189, 189, 0.904);
  background: rgb(240, 240, 240);
  color: rgb(255, 123, 0);
  transition: transform 0.3s, background 0.3s, color 0.3s;
  box-shadow: 0px 4px 8px rgba(175, 175, 175, 0.384);
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    color: #FFF;
    background: hsl(29, 100%, 66%);
  }

  &.active {
    background: hsl(29, 100%, 66%);
    color: white;
  }
`;

// Estilizando o componente Nav com a animação de entrada
const StyledNav = styled(Nav)`
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

function Navigation() {
  // Array contendo as rotas e seus nomes
  const routes = [
    { path: '/home', name: 'Home', icon: faHome },
    { path: '/relatorios', name: 'Gerar Relatórios', icon: faFileAlt },
  ];

  const currentPath = useLocation().pathname;

  return (

    <StyledNav md={4} variant="pills">
      {routes.map((route, index) => (
        <Nav.Item key={index}>
          <StyledNavLink as={Link} to={route.path} className={currentPath === route.path ? 'active' : ''}>
            <FontAwesomeIcon icon={route.icon} /> {route.name}
          </StyledNavLink>
        </Nav.Item>
      ))}
    </StyledNav>
  );
}

export default Navigation;
