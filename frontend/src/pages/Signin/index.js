import React from "react";
import styled from "styled-components";
import Background from "../../imagens/background.jpg"
import { Row, Col, Form, Button } from "react-bootstrap";

const ColLeft = styled(Col)`
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Garante que a div ocupe toda a altura */
`;

const StyledH1 = styled.h1`
    font-weight: 600;
    color: hsl(24, 70%, 50%);
    font-size: 50px;
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


function SignIn() {
    return (
        <StyleRow>
            <ColLeft xs={7}>
                    <Col xs={7}>
                        <StyledH1>Facilitando sua Forma de Gerar Relatórios Contratuais</StyledH1>
                        <p>Subtítulo</p>
                    </Col>
            </ColLeft>
            <ColRigth>             
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                    </Form>
            </ColRigth>            
        </StyleRow>
    );
}

export default SignIn;
