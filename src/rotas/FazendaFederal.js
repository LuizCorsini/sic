import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Navigation from '../componentes/NavHome';
import ButtonImput from '../componentes/BtnImput';
import Tabbed from '../componentes/Tabbed';

const FormCustom = styled(Form)`
    border: 1px solid rgb(219, 219, 219);
    border-radius: 12px;
    padding: 12px;
`
const FazendaFederal = () => {
    const [addressType, setAddressType] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer o que quiser com os dados do formulário
        console.log({
            addressType,
            address,
            number,
            complement,
            neighborhood,
            ownerName,
            cpfCnpj,
            birthDate
        });

    };

    return (
        <Container>
            <Navigation />
            <FormCustom onSubmit={handleSubmit}>
                {/* Seção de campos de endereço */}
                <Row className="mb-3">
                    <Form.Group as={Col} xs="auto" controlId="formAddressType">
                        <Form.Label>Tipo de Endereço</Form.Label>
                        <Form.Select defaultValue="Selecione" onChange={(e) => setAddressType(e.target.value)}>
                            <option>Avenida</option>
                            <option>Rua</option>
                            <option>Beco</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formAddress">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" placeholder="Digite o endereço" onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} xs="auto" controlId="formNumber">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text" placeholder="Número" onChange={(e) => setNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} xs="auto" controlId="formComplement">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="text" placeholder="Complemento" onChange={(e) => setComplement(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formNeighborhood">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" placeholder="Bairro" onChange={(e) => setNeighborhood(e.target.value)} />
                    </Form.Group>
                </Row>

                {/* Seção de campos de dados pessoais */}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formOwnerName">
                        <Form.Label>Nome do Proprietário</Form.Label>
                        <Form.Control type="text" placeholder="Nome do Proprietário" onChange={(e) => setOwnerName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCpfCnpj">
                        <Form.Label>CPF ou CNPJ</Form.Label>
                        <Form.Control type="text" placeholder="CPF ou CNPJ" onChange={(e) => setCpfCnpj(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBirthDate">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="date" placeholder="Data de Nascimento" onChange={(e) => setBirthDate(e.target.value)} />
                    </Form.Group>
                </Row>

                {/* Botão de pesquisa */}
                <ButtonImput variant="success" type="submit">
                    Pesquisar
                </ButtonImput>
            </FormCustom>
            <Row>
                <Tabbed />
            </Row>
        </Container>
        
        
        
    );
};

export default FazendaFederal;
