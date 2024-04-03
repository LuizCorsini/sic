import React, { useState } from "react";
import * as C from './styles';
import { faRightToBracket, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth"; // Importe o hook useAuth

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); // Adicione o estado showModal e setShowModal

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      setShowModal(true);
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      setShowModal(true);
      return;
    }
    navigate("/home");
  };

  return (
    <C.StyleRow>
      <C.ColLeft xs={12} md={7}>
        <C.StyledH1>Compromissos Contratuais em <C.StyleSpam>Um</C.StyleSpam> Toque</C.StyledH1>
        </C.ColLeft>
        <C.ColRigth xs={12} md={5}>
          <Form as={Col} md={8}>
            <Row className="justify-content-md-center">
              <FontAwesomeIcon style={{color:'#ff9100f5'}} icon={faUserLock} className="mb-3" size="2x" />
            </Row>
            <C.StyledFormGroup className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <C.StyledFormControl 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="Digite seu e-mail" 
              />
            </C.StyledFormGroup>
            <Form.Text className="text-muted">
                Não compartilhamos seus dados de e-mail com terceiros.
            </Form.Text>

            <C.StyledFormGroup 
              className="mb-3" 
              controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <C.StyledFormControl 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
              />
            </C.StyledFormGroup>
            <Form.Group 
              className="mb-3" 
              controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="lembrar de mim" 
              />
            </Form.Group>
            <C.StyledButton 
              onClick={handleSignIn} 
              variant="primary" 
              type="submit"
              className="mb-3">
              <C.StyledfaRightToBracket active='false' icon={faRightToBracket}></C.StyledfaRightToBracket><span>Entrar</span>
            </C.StyledButton>
              <C.StyledLinkButtonReg Text="" to='/signup'>Registre-se</C.StyledLinkButtonReg>
          </Form>
          </C.ColRigth>
            <C.StyledModal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Erro no Login</Modal.Title>
          </Modal.Header>
              <Modal.Body>
              Ocorreu um erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.
              </Modal.Body>
              <Modal.Footer>
              <C.StyledButtonModal variant="warning" onClick={() => setShowModal(false)}>
                  Fechar
              </C.StyledButtonModal>
              </Modal.Footer>
        </C.StyledModal>            
      </C.StyleRow>
  );
};

export default SignIn;
