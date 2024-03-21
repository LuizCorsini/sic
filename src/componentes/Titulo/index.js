import styled from "styled-components"

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    font-weight: ${props => props.largura || 'bolder'};
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: ${props => props.marginTop || 0} ${props => props.marginRight || 0} ${props => props.marginBottom || 0} ${props => props.marginLeft || 0};
`