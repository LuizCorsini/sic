import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const AwesomeIcon = styled(FontAwesomeIcon)`
    color: hsl(29, 100%, 66%);
    transition: transform 0.3s, color 0.3s;
    &:hover {
        transform: scale(1.1);
        color: rgb(255, 123, 0);
    }

`

function BtnCanvasPerfil({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AwesomeIcon
        icon={faUserCircle}
        onClick={handleShow}
        className="me-2"
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
    </>
    
  );
}

export default BtnCanvasPerfil;
