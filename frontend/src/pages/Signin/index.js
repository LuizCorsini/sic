import React from "react";
import styled from "styled-components";
import Background from "../../imagens/background2.png"
import { Row, Col, Form, Button } from "react-bootstrap";
import { faRightToBracket, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    color: hsl(24, 70%, 50%);
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
    background: hsl(24, 70%, 50%);
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

function SignIn() {
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
                    <FontAwesomeIcon style={{color:'hsl(24, 70%, 50%)'}} icon={faUserLock} className="mb-3" as={Col} size="2x" md="auto"  />
                </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <StyledFormControl type="email" placeholder="Digite seu e-mail" />
                        <Form.Text className="text-muted">
                        Não compartilhamos seus dados de e-mail com terceiros.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <StyledFormControl type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <StyledButton variant="primary" type="submit">
                        <StyledfaRightToBracket active='false' icon={faRightToBracket}></StyledfaRightToBracket><span>Entrar</span>
                    </StyledButton>
                </Form>
            </ColRigth>            
        </StyleRow>
    );
}

export default SignIn;
