import React, { useState } from "react";
import * as C from './styles';
import { faRightToBracket, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSignIn = () => {
    if (!email | !password) {
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
    <C.StyleContainer>
      <C.StyleRow>
        <C.ColLeft xs={12} md={7}>
          <C.StyledH1>Compromissos Contratuais em <C.StyleSpam>Um</C.StyleSpam> Toque</C.StyledH1>
        </C.ColLeft>

        <C.ColRight xs={12} md={5} className="justify-content-md-center">
          <C.StyleForm as={Col} md={8}>
            <div>
              <FontAwesomeIcon style={{
                display: 'block',
                alignItems: 'center',
                justifyContent:'center',
                color:'#ff9100f5'}} 
                icon={faUserLock} 
                className="mb-3" 
                size="2x" />
            </div>

            <C.InputWrapper>
              <C.Input 
                className={email !== "" ? "has-val" : ""}
                value={email} 
                onChange={(e) => [setEmail(e.target.value), setError("")]} 
                type="email" />
              <C.Placeholder hasValue={email !== ""}>E-mail</C.Placeholder>
              <C.StyledTextMuted>
                Não compartilhamos seus dados de e-mail com terceiros.
              </C.StyledTextMuted>
            </C.InputWrapper>

            <C.InputWrapper>
              <C.Input
                className={password !== "" ? "has-val" : ""}
                value={password} 
                onChange={(e) => [setPassword(e.target.value), setError("")]} 
                type="password" 
              />
              <C.Placeholder hasValue={password !== ""}>Senha</C.Placeholder>
            </C.InputWrapper>

            <C.StyledLinkButtonSignin 
              onClick={handleSignIn} 
              variant="primary" 
              type="submit"
              className="mb-3">
              <C.StyledfaRightToBracket 
              active='false'
              icon={faRightToBracket}>
              </C.StyledfaRightToBracket>Entrar
            </C.StyledLinkButtonSignin>
            <C.StyledButtonSignup to='/signup'>Registre-se</C.StyledButtonSignup>
          </C.StyleForm>



        </C.ColRight>

      </C.StyleRow>

      <C.StyledModal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Erro no Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ocorreu um erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.
        </Modal.Body>
        <Modal.Footer>
          <C.StyledButtonModal onClick={() => setShowModal(false)}>
            Fechar
          </C.StyledButtonModal>
        </Modal.Footer>
      </C.StyledModal>

    </C.StyleContainer>
  );
};

export default SignIn;
