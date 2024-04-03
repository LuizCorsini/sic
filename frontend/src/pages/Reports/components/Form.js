import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import SelectCities from './SelectCities';

const StyledForm = styled(Form)`
    background: rgb(240, 240, 240);
    border: 1px solid rgb(219, 219, 219);
    border-radius: 12px;
    padding: 15px;
`;

const FormReports = () => {
    return (

            <StyledForm >
                    <SelectCities />
            </StyledForm>
    );
};

export default FormReports;
