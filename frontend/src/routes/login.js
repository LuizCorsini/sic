import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { CustomButtomModal } from '../componentes/BtnModal'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh; /* altura total da viewport */
`;

const zoomOut = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.8); /* Reduz o tamanho para 80% */
    }
`;

const BoxContainer = styled.div`
    display: flex;
    width: 600px;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 12px;
    padding: 40px;
    align-items: center;
    justify-content: center;
    animation: ${zoomOut} 1s ease forwards; /* Aplica a animação de zoom out */
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const FormLabel = styled.label`
    color: Black;
    font-size: 20px;
`;

const FormInput = styled.input`
    background-color: rgb(243, 243, 243);
    color: Black;
    border: 1px solid rgb(255, 205, 113);
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

const SubmitButton = styled.button`
    border-radius: 20px;
    font-weight: bold;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-image: linear-gradient(to right, rgb(255, 193, 111), rgb(226, 110, 1));
    color: antiquewhite;
    border: none;
    cursor: pointer;

    &:hover {
        background-image: linear-gradient(to right, rgb(253, 176, 75), rgb(214, 104, 0));
    }
`;

function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.example.com/login', {
                username,
                password,
            });
            console.log('Usuário autenticado:', response.data);
            history.push('/Home.js');
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            setShowModal(true);
        }
    };

    return (
        <Container>
            <BoxContainer>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel htmlFor="username">ID do usuário ou E-mail</FormLabel>
                            <FormInput id="username" type="text" placeholder="Digite seu ID de usuário ou E-mail" 
                                value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">Não compartilhamos seus dados com terceiros</small>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <FormInput id="password" type="password" placeholder="Digite sua Senha" 
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </FormGroup>
                        <SubmitButton type="submit">Entrar</SubmitButton>
                    </form>
                </FormContainer>
            </BoxContainer>

            
            <Modal show={showModal} onHide={handleCloseModal}> {/* Configuração do modal */}
                <Modal.Header closeButton>
                    <Modal.Title>Erro ao autenticar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Houve um erro ao autenticar o usuário. Por favor, verifique suas credenciais e tente novamente.
                </Modal.Body>
                <Modal.Footer>
                    <CustomButtomModal
                        onClick={handleCloseModal}>
                        Fechar
                    </CustomButtomModal>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Login;
