import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
