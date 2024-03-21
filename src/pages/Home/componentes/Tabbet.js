import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tabbed() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Relatórios Ativos">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Relatórios Arquivados">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}

export default Tabbed;