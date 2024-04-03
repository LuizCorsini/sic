import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

const estadosBrasileiros = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
    'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const SelectStates = ({ onChange }) => {
    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    const handleChange = (event) => {
        const estado = event.target.value;
        setEstadoSelecionado(estado);
        onChange && onChange(estado);
    };

    return (
            <Form.Group className='mb-3' as={Col} xs={1} controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Select onChange={handleChange} value={estadoSelecionado} aria-label="Selecione um estado">
                    <option value="">--</option>
                    {estadosBrasileiros.map((estado, index) => (
                        <option key={index} value={estado}>
                            {estado}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

    );
};

export default SelectStates;
