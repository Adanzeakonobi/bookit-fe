import { Container, Row, Col } from 'react-bootstrap';
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <Container>
      <Row>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
