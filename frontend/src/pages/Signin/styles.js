import styled from "styled-components";
import Background from "../../imagens/background3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ColLeft = styled(Col)`
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

export const ColRight = styled(Col)`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px;
    @media (max-width: 450px) {
        background-image: linear-gradient(to left,  #c97200f5, #8400d1  );

    }
`;

export const StyleContainer = styled(Col)`
`
export const StyleForm = styled.form`
    max-width: 820px;
    @media (max-width: 450px) {
        border: 1px solid hsla(36, 100%, 50%, 0.308);
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 2px #0003;
        padding: 20px;

    }
`;

export const StyledH1 = styled.h1`
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

export const ColRigth= styled(Col)`
    background: #FFF; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyleRow = styled(Row)`
    height: 100vh;
`;

export const StyleSpam = styled.span`
    color: rgb(91, 0, 177);
`;

export const StyledfaRightToBracket = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

export const StyledFormControl= styled(Form.Control)`
    border: none;
    font-size: 15;
    background: transparent;
    line-height: 1.2;
    border-radius: 0;
    caret-color: rgb(255, 145, 0);
`;

export const StyledFormGroup = styled(Form.Group)`
    border-bottom: 1px solid grey;
    padding: 0 10px;
    width: 100%;
    input:focus{
        outline: 0;
    }

`
export const StyledTextMuted = styled.span`
    font-size: 1.5vh;
`

export const StyledButton = styled(Button)`
    background: #ff9100f5;
    border: 0;
    border-radius: 5px;
    width: 100%;
    font-weight: 600;
    padding: 10px;
    &:hover{
        background:#ee8700f5;
    }
    &:active{
        background: false;
        box-shadow: 0 1px #666;
        transform: translateY(1px)
    }
`;

export const StyledButtonSignup = styled(Link)`
    background: transparent;
    transition: background-color 0.5s;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    border: 1px solid #ff9100f5;
    color: #ff9100f5;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    &:hover{
        background: #ee8700f5;
        border: none;
        color: #FFF;
    }
    &:active{
        background: false;
        box-shadow: 0 1px #c97200f5;
        transform: translateY(1px)
    }
`;

export const StyledLinkButtonSignin = styled(Link)`
    text-decoration: none;
    color: #FFF;
    background: #ff9100f5;
    border-radius: 5px;
    display: block;
    text-align: center;
    align-items: center;
    width: 100%;
    border: 1px solid #ff9100f5;
    padding: 9px;
    font-weight: 600;
    transition: background-color 0.5s;
    &:active{
        background: false;
        box-shadow: 0 1px #c97200f5;
        transform: translateY(1px)
    }
    &:hover{
        color: #FFF;
        background: #ee8700f5;
    }  
`;

export const StyledButtonModal = styled.button`
    background: #ff9100f5;
    border: 0;
    border-radius: 5px;
    color: white;
    padding:8px;
    &:hover{
        background: #ee8700f5;
        color: #FFF;
    }
    &:active{
        background: false;
        box-shadow: 0 1px #c97200f5;
        transform: translateY(1px)
    }
`;

export const StyledModal = styled(Modal)`
    display: flex !important;
    justify-content: center;
    align-items: center;

    .modal-content {
        max-width: 500px;}
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #adadad;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-bottom-color: #ff9900;
  }

  &.has-val {
    border-bottom-color: #ff9900;
  }
`;

export const Placeholder = styled.span.attrs(props => ({
    "data-hasvalue": props.hasValue ? "true" : "false"
  }))`
    position: absolute;
    top: 18px;
    left: 0;
    font-size: 18px;
    pointer-events: none;
    transition: all 0.3s ease;
    color: #adadad;
  
    &[data-hasvalue="true"] {
      top: -10px;
      font-size: 14px;
      color: #3a3a3a;
    }
  
    ${Input}:focus ~ & {
      top: -10px;
      font-size: 14px;
      color: #ff9900;
    }
  `;