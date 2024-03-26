import React from "react";
import styled from "styled-components";
import Background from "../../imagens/background3.png"
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%; /* Garante que a div ocupe toda a altura */
`;

const StyledH1 = styled.h1`
    font-weight: 700;
    color: #ff9100f5;
    font-size: 70px;
`

const ColRigth= styled(Col)`
    background: #FFF; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Garante que a div ocupe toda a altura */
`;

const StyleRow = styled(Row)`
    height: 100vh;
`;

const StyleStrong = styled.strong`
    color: rgb(91, 0, 177);
`;

const StyledfaRightToBracket = styled(FontAwesomeIcon)`
    margin-right: 10px
`;

const StyledFormControl= styled(Form.Control)`
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0;
    caret -color: rgb(255, 145, 0);
`;

const StyledButton = styled(Button)`
    background: #ff9100f5;
    border: 0;
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
`;

function SignIn() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(){
        //chamada API
        //Se Retorno ok, direciona para home
        //Se não exibe mensagem para o usuario

        //objeto promise
        // axios.get('https://api.github.com/users/luizcorsini')
        //     .then(response =>{
        //         console.log(response.data)
        //     })
        //     .catch(error =>{
        //         console.log('Ocorreu erro')
        //     })
        try{
            await authService.SignIn(email, password);
            navigate('/home');
        } catch (error){
            setShowModal(true);
        }

    };
    return (
        <StyleRow>
            <ColLeft 
                xs={7}>
                    <StyledH1 
                    as={Col} 
                    md={9}>Compromissos Contratuais em <StyleStrong>um</StyleStrong> Toque</StyledH1>
            </ColLeft>


            <ColRigth md={5}>

                <Form as={Col} md={8}>
                <Row className="justify-content-md-center">
                    <FontAwesomeIcon style={{color:'#ff9100f5'}} icon={faUserLock} className="mb-3" as={Col} size="2x" md="auto"  />
                </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <StyledFormControl 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                        type="email" placeholder="Digite seu e-mail" />
                        <Form.Text className="text-muted">
                        Não compartilhamos seus dados de e-mail com terceiros.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <StyledFormControl 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} 
                        type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <StyledButton onClick={handleSignIn} variant="primary" type="submit">
                        <StyledfaRightToBracket active='false' icon={faRightToBracket}></StyledfaRightToBracket><span>Entrar</span>
                    </StyledButton>
                </Form>
            </ColRigth>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
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
            </Modal>            
        </StyleRow>
    );
}

export default SignIn;
