import {
  Container, Row, Col, Alert, Form, Button,
} from 'react-bootstrap';

function AddVehicle() {
  const errors = ['error 1', 'error 2'];
  
  return (
    <Form>
      <Container className="AddVehicle">
        <Row>
          <Col>
            { errors.map((error) => (
              <Alert key={error} variant="danger">
                {error}
              </Alert>
            )) }
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="image-panel">
              <input type="file" />
            </div>
          </Col>
          <Col lg={4}>
            <Row>
              <Form.Control type="text" placeholder="Name" name="name" />
            </Row>
            <Row>
              <Form.Control type="number" placeholder="Price" name="price" />
            </Row>
            <Row>
              <Button variant="primary" type="submit">Create</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default AddVehicle;
