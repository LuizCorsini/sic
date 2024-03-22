import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Navigation from '../../componentes/Navigation';
import FormReports from './components/Form';
import AdreasCard from '../../componentes/AdreasCard';


const StyledContainer = styled(Container)`
    margin-top: 100px;
`;
const adreas = [
    { 
        "id": 1, 
        "author": {
            "id": 1,
            "name": "Carlos Augusto",
            "username":  "carlosaugusto",
            "avatar": "./imagens/avatars/avatar_1.jpeg"
        },
        "endereco": "Rua Otacílio Negrão de Lima",
        "numero": "32",
        "tipo_endereco": ["Apto"], // Corrigido para ser um tipo enumerado
        "complemento": "",
        "bairro": "Jardim Botânico", // Corrigido o nome do bairro
        "cep": "31450-007", // Corrigido o formato do CEP
        "cpf": "08760-365", // Pode ser removido se não for necessário
        "cnpj": "143.856.965-01", // Pode ser removido se não for necessário
        "data_nascimento": "1990-01-01" // Adicionada uma data de exemplo
    },
    {
        "id": 2,
        "author": {
            "id": 2,
            "name": "Mariana Oliveira",
            "username": "marianaoliveira",
            "avatar": "./imagens/avatars/avatar_2.jpeg"
        },
        "endereco": "Avenida Paulista",
        "numero": "123",
        "tipo_endereco": ["Casa"],
        "complemento": "Apto 101",
        "bairro": "Bela Vista",
        "cep": "01310-100",
        "cpf": "143.856.855-01",
        "cnpj": "12.345.678/0001-90",
        "data_nascimento": "1985-05-20"
    },
    {
        "id": 3,
        "author": {
            "id": 3,
            "name": "Ana Santos",
            "username": "anasantos",
            "avatar": "./imagens/avatars/avatar_4.jpeg"
        },
        "endereco": "Rua dos Girassóis",
        "numero": "88",
        "tipo_endereco": ["Casa"],
        "complemento": "Fundos",
        "bairro": "Vila Nova",
        "cep": "07890-123",
        "cpf": "987.654.321-00",
        "cnpj": "23.345.678/0001-80",
        "data_nascimento": "1992-08-03"
    }
  ];

const Reports = () => {


    return (
        <StyledContainer>
            <Navigation />
            < FormReports />
            <Row>
                <Col>
                    {
                        adreas.map( adrea =>(
                        <AdreasCard key={adreas.id} adreas={adrea}/>
                        ))
                    }
                </Col>
            </Row>
        </StyledContainer>
    );
};

export default Reports;
