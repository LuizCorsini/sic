import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CustomButtomModal = styled(Button)`
    background-image: ${props => props.bgColor || 'linear-gradient(to right, rgb(253, 176, 75), rgb(214, 104, 0));'};
    border: ${props => props.bdColor || 'none'};
    &:hover {
        background-color: ${props => props.hoverColor || 'linear-gradient(to right, rgb(255, 194, 113), rgb(255, 123, 0));'};
    }
`