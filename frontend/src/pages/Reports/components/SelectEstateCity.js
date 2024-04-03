import React, { useState } from 'react';
import SelectEstados from './SelectStates';
import SelectCidades from './SelectCities';
import { Col } from 'react-bootstrap';

const SelecStateCity = () => {
    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    const handleEstadoChange = (estado) => {
        setEstadoSelecionado(estado);
    };

    return (
        <div as={Col} xs={3}>
            <SelectEstados onChange={handleEstadoChange} />
            {estadoSelecionado && <SelectCidades estadoSelecionado={estadoSelecionado} />}
        </div>
    );
};

export default SelecStateCity;
