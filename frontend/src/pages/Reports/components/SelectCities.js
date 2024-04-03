import React, { useState } from 'react';
import { Col, Form, Button, Row} from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    position: botton;
    border-radius: 5px;
    background: #6f00af;
    border: none;
    &:hover{
        bacKground: #8400d1;
    }
    &:active: #8400d1;
`

const cidadesBrasileiras = [
        { estado: 'AC', cidades: ['Rio Branco', 'Cruzeiro do Sul', 'Tarauacá'] },
        { estado: 'AL', cidades: ['Maceió', 'Arapiraca', 'Rio Largo'] },
        { estado: 'AC', cidades: ['Rio Branco', 'Cruzeiro do Sul', 'Tarauacá'] },
        { estado: 'AL', cidades: ['Maceió', 'Arapiraca', 'Rio Largo'] },
        { estado: 'AP', cidades: ['Macapá', 'Santana', 'Laranjal do Jari'] },
        { estado: 'AM', cidades: ['Manaus', 'Parintins', 'Itacoatiara'] },
        { estado: 'BA', cidades: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'] },
        { estado: 'CE', cidades: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte'] },
        { estado: 'DF', cidades: ['Brasília', 'Ceilândia', 'Taguatinga'] },
        { estado: 'ES', cidades: ['Vitória', 'Vila Velha', 'Serra'] },
        { estado: 'GO', cidades: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'] },
        { estado: 'MA', cidades: ['São Luís', 'Imperatriz', 'São José de Ribamar'] },
        { estado: 'MT', cidades: ['Cuiabá', 'Várzea Grande', 'Rondonópolis'] },
        { estado: 'MS', cidades: ['Campo Grande', 'Dourados', 'Três Lagoas'] },
        { estado: 'MG', cidades: ['Belo Horizonte', 'Contagem', 'Uberlândia'] },
        { estado: 'PA', cidades: ['Belém', 'Ananindeua', 'Santarém'] },
        { estado: 'PB', cidades: ['João Pessoa', 'Campina Grande', 'Santa Rita'] },
        { estado: 'PR', cidades: ['Curitiba', 'Londrina', 'Maringá'] },
        { estado: 'PE', cidades: ['Recife', 'Jaboatão dos Guararapes', 'Olinda'] },
        { estado: 'PI', cidades: ['Teresina', 'Parnaíba', 'Picos'] },
        { estado: 'RJ', cidades: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias'] },
        { estado: 'RN', cidades: ['Natal', 'Mossoró', 'Parnamirim'] },
        { estado: 'RS', cidades: ['Porto Alegre', 'Caxias do Sul', 'Pelotas'] },
        { estado: 'RO', cidades: ['Porto Velho', 'Ji-Paraná', 'Ariquemes'] },
        { estado: 'RR', cidades: ['Boa Vista', 'Rorainópolis', 'Caracaraí'] },
        { estado: 'SC', cidades: ['Florianópolis', 'Joinville', 'Blumenau'] },
        { estado: 'SP', cidades: ['São Paulo', 'Guarulhos', 'Campinas'] },
        { estado: 'SE', cidades: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'] },
        { estado: 'TO', cidades: ['Palmas', 'Araguaína', 'Gurupi'] }]
    
    const SelectCities = ({ onSubmit }) => {
        const [estadoSelecionado, setEstadoSelecionado] = useState('');
        const [cidadeSelecionada, setCidadeSelecionada] = useState('');
        const [cpfCnpj, setCpfCnpj] = useState('');
    
        const estados = cidadesBrasileiras.map(cidade => cidade.estado);
    
        const handleEstadoChange = (event) => {
            const estado = event.target.value;
            setEstadoSelecionado(estado);
            setCidadeSelecionada('');
        };
    
        const handleCidadeChange = (event) => {
            const cidade = event.target.value;
            setCidadeSelecionada(cidade);
        };
    
        const handleCpfCnpjChange = (event) => {
            const cpfCnpjValue = event.target.value;
            setCpfCnpj(cpfCnpjValue);
        };
    
        const handleSubmit = () => {
            onSubmit({ estado: estadoSelecionado, cidade: cidadeSelecionada, cpfCnpj });
        };
    
        const cidades = cidadesBrasileiras.find(cidade => cidade.estado === estadoSelecionado)?.cidades || [];
    
        return (
            <Row>
            <Col xs={12} sm={6} md={3} lg={2}>
                <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select value={estadoSelecionado} onChange={handleEstadoChange} aria-label="Selecione um estado">
                        <option value="">---</option>
                        {estados.map((estado, index) => (
                            <option key={index} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Group controlId="cidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Select value={cidadeSelecionada} onChange={handleCidadeChange} aria-label="Selecione uma cidade">
                        <option value="">Selecione uma cidade</option>
                        {cidades.map((cidade, index) => (
                            <option key={index} value={cidade}>
                                {cidade}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Group controlId="cpfCnpj">
                    <Form.Label>CPF/CNPJ</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={cpfCnpj}
                        onChange={handleCpfCnpjChange} 
                        placeholder="Digite o CPF ou CNPJ" 
                    />
                </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={3} lg={4}>
                <Form.Group className="d-flex align-items-end">
                    <StyledButton variant="primary" onClick={handleSubmit}>Consultar</StyledButton>
                </Form.Group>
            </Col>
        </Row>
    );
};
    
    export default SelectCities;
    
