import React from "react";
import styled from "styled-components";
import Background from "../../imagens/background3.png";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { faRightToBracket, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authServices";
import { useState } from "react";

const ColLeft = styled(Col)`
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    display: flex;
    padding: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media (max-width: 450px) {
        display: none;
        height: 20%;
    }
`;

const StyledH1 = styled.h1`
    font-weight: 700;
    color: #ff9100f5;
    font-size: 3.5rem;

    @media (min-width: 576px) {
        font-size: 3rem;
    }

    @media (min-width: 768px) {
        font-size: 4rem;
    }

    @media (min-width: 992px) {
        font-size: 4rem;
    }

    @media (min-width: 1200px) {
        font-size: 5rem;
    }
`;

const ColRigth= styled(Col)`
    background: #FFF; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyleRow = styled(Row)`
    height: 100vh;
`;

const StyleSpam = styled.span`
    color: rgb(91, 0, 177);
`;

const StyledfaRightToBracket = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const StyledFormControl= styled(Form.Control)`
    border: none;
    font-size: 15;
    background: transparent;
    line-height: 1.2;
    border-radius: 0;
    caret-color: rgb(255, 145, 0);
`;


const StyledFormGroup = styled(Form.Group)`
    border-bottom: 1px solid grey;
    padding: 0 10px;
    width: 100%;
    input:focus{
        outline: 0;
    }

`

const StyledButton = styled(Button)`
    background: #ff9100f5;
    border: 0;
    border-radius: 0;
    width: 100%;
    padding: 10px;
    &:hover{
        background: rgb(91, 0, 177);
    }
    &:active{
        background: false;
        box-shadow: 0 1px #666;
        transform: translateY(1px)
    }
`;

const StyledButtonModal = styled(Button)`
    background: #ff9100f5;
    border: 0;
    border-radius: 0;
    color: white;
    &:hover{
        background: rgb(91, 0, 177);
        color: #FFF;
    }
    &:active{
        background: rgb(91, 0, 177);
        box-shadow: 0 1px #666;
        transform: translateY(1px)
    }
`;

const StyledModal = styled(Modal)`
    display: flex !important;
    justify-content: center;
    align-items: center;

    .modal-content {
        max-width: 500px;
`;

function SignIn() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(){
        try{
            await authService.SignIn(email, password);
            navigate('/home');
        } catch (error){
            setShowModal(true);
        }

    };
    return (
        <StyleRow>
            <ColLeft xs={12} md={7}>
                <StyledH1>Compromissos Contratuais em <StyleSpam>Um</StyleSpam> Toque</StyledH1>
            </ColLeft>
            <ColRigth xs={12} md={5}>
                <Form as={Col} md={8}>
                    <Row className="justify-content-md-center">
                        <FontAwesomeIcon style={{color:'#ff9100f5'}} icon={faUserLock} className="mb-3" size="2x" />
                    </Row>
                    <StyledFormGroup className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <StyledFormControl 
                            value={email} 
                            onChange={(event) => setEmail(event.target.value)} 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                        />
                    </StyledFormGroup>
                    <Form.Text className="text-muted">
                            Não compartilhamos seus dados de e-mail com terceiros.
                    </Form.Text>

                    <StyledFormGroup className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <StyledFormControl 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)} 
                            type="password" 
                            
                        />
                    </StyledFormGroup>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="lembrar de mim" />
                    </Form.Group>
                    <StyledButton onClick={handleSignIn} variant="primary" type="submit">
                        <StyledfaRightToBracket active='false' icon={faRightToBracket}></StyledfaRightToBracket><span>Entrar</span>
                    </StyledButton>
                </Form>
            </ColRigth>
            <StyledModal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Erro no Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Ocorreu um erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.
                </Modal.Body>
                <Modal.Footer>
                    <StyledButtonModal variant="warning" onClick={() => setShowModal(false)}>
                        Fechar
                    </StyledButtonModal>
                </Modal.Footer>
            </StyledModal>            
        </StyleRow>
    );
}

export default SignIn;
