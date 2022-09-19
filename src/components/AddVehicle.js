import { useState } from 'react';
import {
  Container, Row, Col, Alert, Form, Button,
} from 'react-bootstrap';

function AddVehicle() {
  const errors = ['error 1', 'error 2'];
  const [{
    id, price, name, image,
  }, setVehicle] = useState({});

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setVehicle({
        id, name, price, image: undefined,
      });
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setVehicle({
        id, name, price, image: reader.result,
      });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };
  const handleChange = (e) => {
    setVehicle({
      id, name, price, image, [e.target.name]: e.target.value,
    });
  };
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
              <input type="file" onChange={onSelectFile} />
              {image ? <img src={image} alt={name} /> : 'Plese select an image' }
            </div>
          </Col>
          <Col lg={4}>
            <Row>
              <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
            </Row>
            <Row>
              <Form.Control type="number" placeholder="Price" name="price" value={price} onChange={handleChange} />
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
