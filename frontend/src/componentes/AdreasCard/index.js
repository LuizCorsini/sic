import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const StyledParagraph = styled.p`
  font-weight: 400;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  background: rgb(240, 240, 240);
  padding: 15px;
  border-radius: 10px;
`;

const StyledBttonDownload = styled(Button)`
  background: #a200ff ;
  border: none;
  &:hover{
    background:#8300cf ;
  }
  &:active{
    background: #8300cf;
    outline: #8300cf ;
  }
`

function AdreasCard({ adreas }) {

  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (

    <ListGroup>
      <StyledListGroupItem as="li" className=" mt-3 d-flex justify-content-between align-items-start">
        <Row id="enderecos" className="ms-2 me-auto">
          <div className="fw-bold">
            <StyledParagraph>

                <strong>Nome Propietário:</strong> {adreas.author.name}<br/>
                <strong>CPF:</strong> {adreas.cpf}<br/>
                <strong>CNPJ:</strong> {adreas.cnpj}<br/>
                <strong>Data de Nascimento:</strong> {adreas.data_nascimento}<br/>
                <strong>Endereço:</strong> {adreas.endereco} - {adreas.tipo_endereco}, {adreas.numero} - {adreas.bairro}<br/>
                <strong>Cidade: </strong>{adreas.cidade} | {adreas.estado}<br/>
                <strong>CEP:</strong> {adreas.cep}<br/>
                <strong>Complemento:</strong> {adreas.complemento}<br/>


            </StyledParagraph>
            <div>
            <StyledBttonDownload
              className='mt-2'
              variant="success"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
              ><StyledFontAwesomeIcon icon={faFileArrowDown} />
              { isLoading ? 'Loading…' : 'Download'}
            </StyledBttonDownload>
            </div>
          </div>
        </Row>
        <Badge bg="warning" pill>
          14
        </Badge>
      </StyledListGroupItem>
    </ListGroup>
  );
}

export default AdreasCard;