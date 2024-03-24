import React from 'react';
import { Col, Form} from 'react-bootstrap';

// Lista de cidades brasileiras (apenas algumas para exemplo)
const cidadesBrasileiras = [
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
    { estado: 'TO', cidades: ['Palmas', 'Araguaína', 'Gurupi'] }
];

const SelectCityes = ({ estadoSelecionado, onChange }) => {
    const cidades = cidadesBrasileiras.find(cidade => cidade.estado === estadoSelecionado)?.cidades || [];

    return (

            <Form.Group as={Col} controlId="cidade">
                <Form.Label>Cidade</Form.Label>
                <Form.Select onChange={onChange} aria-label="Selecione uma cidade">
                    <option value="">Selecione uma cidade</option>
                    {cidades.map((cidade, index) => (
                        <option key={index} value={cidade}>
                            {cidade}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

    );
};

export default SelectCityes;