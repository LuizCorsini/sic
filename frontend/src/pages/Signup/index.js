import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
        <C.Container>
        <C.Label>Cadastro de Usuário</C.Label>
        <C.Content>
        <Form.Control
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Form.Control
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Form.Control
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.Button onClick={handleSignup} >Inscrever-se</C.Button>
        <C.LabelSignin>
            Já tem uma conta?
            <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
            </C.Strong>
        </C.LabelSignin>
        </C.Content>
    </C.Container>
  );
};

export default SignUp;