import React, { useState } from 'react';
import { Collapse, Container, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const CustomContainer = styled(Container)`
    position: fixed;
    top: 0;
    right: 0;
    width: 10%;
    bottom: 0;
    background-color: rgba(255, 153, 0, 0.384);
    z-index: 999;
    display: ${({ open }) => (open ? 'block' : 'none')};
`;

const CustomCollapse = styled(Collapse)`
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
    padding: 10px;
`;

const CloseButton = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const StyledListGroup = styled(ListGroup)`
    text-align: left;
    padding: 10px;
    margin-top:30%;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
    border: none;
    cursor: pointer;
`;

function Home() {
    const [openEnvelope, setOpenEnvelope] = useState(false);
    const [openUserCircle, setOpenUserCircle] = useState(false);

    const handleToggleEnvelope = () => {
        setOpenEnvelope(!openEnvelope);
        setOpenUserCircle(false);
    };

    const handleToggleUserCircle = () => {
        setOpenUserCircle(!openUserCircle);
        setOpenEnvelope(false);
    };

    const handleClose = () => {
        setOpenEnvelope(false);
        setOpenUserCircle(false);
    };

    return (
        <>
            <MenuWrapper>
                <FontAwesomeIcon
                    icon={faBell}
                    size="2x"
                    style={{ color: 'rgb(255, 183, 76)' }}
                    onClick={handleToggleEnvelope}
                    aria-controls="envelope-collapse"
                />
                <FontAwesomeIcon
                    icon={faUserCircle}
                    size="2x"
                    style={{ color: ' rgb(255, 183, 76)' }}
                    onClick={handleToggleUserCircle}
                    aria-controls="user-circle-collapse"
                />
            </MenuWrapper>

            <CustomContainer className='shadow-lg' open={openEnvelope || openUserCircle}>
                <CloseButton variant="light" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseButton>

                <CustomCollapse in={openEnvelope} id="envelope-collapse">
                    <StyledListGroup>
                        <StyledListGroupItem as={Link} to="/mensagens" onClick={handleToggleEnvelope}>Mensagens</StyledListGroupItem>
                    </StyledListGroup>
                </CustomCollapse>

                <CustomCollapse in={openUserCircle} id="user-circle-collapse">
                    <StyledListGroup>
                        <StyledListGroupItem as={Link} to="/configuracoes" onClick={handleToggleUserCircle}>Configurações</StyledListGroupItem>
                        <StyledListGroupItem as={Link} to="/logout" onClick={handleToggleUserCircle}>Sair</StyledListGroupItem>
                    </StyledListGroup>
                </CustomCollapse>
            </CustomContainer>
        </>
    );
}

export default Home;
