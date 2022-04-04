/** Styles */
import './App.css';

/** Bootstrap Components */
import { Tab, Nav, Row, Col } from "react-bootstrap";

/** Components */
import Menu from './components/Menu';
import Content from './components/Content';

/** Task Data */
import { menuData, contentData } from "./taskData";

const App = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="git">
      <Row>
        <Col sm={3} className="navbar_col pe-0">
          <Nav variant="pills" className="flex-column">
            {
              menuData.map((data, dataIdx) => <Menu data={data} key={dataIdx} />)
            }
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {
              contentData.map((data, dataIdx) => <Content data={data} key={dataIdx} />)
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
