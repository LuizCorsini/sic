import React, { useState } from 'react';
import SelectEstados from './SelectStates';
import SelectCidades from './SelectCityes';

const SelecStateCity = () => {
    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    const handleEstadoChange = (estado) => {
        setEstadoSelecionado(estado);
    };

    return (
        <div>
            <SelectEstados onChange={handleEstadoChange} />
            {estadoSelecionado && <SelectCidades estadoSelecionado={estadoSelecionado} />}
        </div>
    );
};

export default SelecStateCity;
