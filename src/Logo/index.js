import { useState } from 'react';
import React from 'react';
import Logo from '../imagens/sic-logo.png';
import { CustomButtomModal } from '../componentes/BtnModal';
import { Navbar, Modal, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Brand({ isLoggedIn }) {

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const handleClick = () => {
        // Se o usuário estiver autenticado, redirecione para a página Home
        if (isLoggedIn) {
            window.location.href = '/home';
        } else {
            // Se não estiver autenticado, exiba o modal solicitando login
            handleModalShow();
        }
    };

  return (
    <>
        <Navbar className='d-inline-block aling-top' onClick={handleClick}>
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt="logo sic"
                src={Logo}
                width="90"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            </Container>
        </Navbar>

        <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Erro de Autenticação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Por favor, faça login para acessar esta página.
            </Modal.Body>
            <Modal.Footer>
                <Link to="/">
                    <CustomButtomModal onClick={handleModalClose}>
                        Fechar
                    </CustomButtomModal>
                </Link>
            </Modal.Footer>
        </Modal>
    </>
  );

}

export default Brand;
