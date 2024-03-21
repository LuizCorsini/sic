import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


function ListPdfs() {
  return (
    <ListGroup className='mt-3' as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Rua André Carlos Pereira, 287</div>
          <p><strong>Bairro:</strong> Jardim Amélia</p>
          <p><strong>CEP:</strong> 31500-560</p>
        </div>
        <Badge bg="warning" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Rua Bonfim de Abreu, 88</div>
          <p><strong>Bairro:</strong> Santa Cruz</p>
          <p><strong>CEP:</strong> 31255-370</p>
        </div>
        <Badge bg="warning" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Rua Tamoios, 434</div>
          <p><strong>Bairro:</strong> Centro</p>
          <p><strong>CEP:</strong> 30120-054</p>
        </div>
        <Badge bg="warning" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListPdfs;