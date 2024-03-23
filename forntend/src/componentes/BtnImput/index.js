import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CustomButton = styled(Button)`
    background: ${props => props.bgcolor || 'hsl(29, 100%, 66%)'};
    border: 1px solid rgba(189, 189, 189, 0.904);
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
        background: ${props => props.isPressed ? 'rgb(196, 111, 0)' : 'rgb(255, 123, 0)'};
        border-color: ${props => props.isPressed ? 'rgb(196, 111, 0)' : 'rgb(196, 111, 0)'};
    }

    &:focus {
        box-shadow: none;
    }
`;

function ButtonInput({ children, ...rest }) {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <CustomButton
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            isPressed={isPressed}
            {...rest}
            style={{ backgroundColor: isPressed ? 'rgb(255, 123, 0)' : 'hsl(29, 100%, 66%)', borderColor: isPressed ? 'rgb(196, 111, 0)' : 'rgba(188, 189, 189, 0.904)' }}
        >
            {children}
        </CustomButton>
    );
}

export default ButtonInput;
