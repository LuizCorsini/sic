import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(Nav.Link)`
  color: red;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

function NavegacaoFF() {
  return (

        <Nav variant="underline" defaultActiveKey="/fazendafederal">
          <Nav.Item>
            <StyledLink to={"/home"}>
              <StyledNavLink href="/home">Home</StyledNavLink>
            </StyledLink>
          </Nav.Item>
          <Nav.Item>
            <StyledLink to={"/fazendafederal"}>
              <StyledNavLink href="/fazendafederal">Fazenda Federal</StyledNavLink>
            </StyledLink>
          </Nav.Item>
        </Nav>

      );
}

export default NavegacaoFF;