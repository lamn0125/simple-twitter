import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'styles/main.scss';
import { UserNavbar } from 'components/Layout'
import { MainContent } from 'components/Main'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <UserNavbar />
        </Col>
        <Col md={4}>
          <MainContent />
        </Col>
      </Row>
    </Container>
  )
}

export default App

