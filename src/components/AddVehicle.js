import { useState } from 'react';
import {
  Container, Row, Col, Alert, Form, Button,
} from 'react-bootstrap';
import { MdCheck } from 'react-icons/md';
import { AiOutlineRightCircle } from 'react-icons/ai';
import '../styles/AddVehicle.scss';

function AddVehicle() {
  const [errors, setErrors] = useState([]);
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
    reader.onerror = () => {
      setErrors([`Error occurred reading file: ${file.name}`]);
    };
  };
  const handleChange = (e) => {
    setVehicle({
      id, name, price, image, [e.target.name]: e.target.value,
    });
  };
  return (
    <Form className="AddVehicle">
      <Container>
        <Row className="errors">
          <Col>
            { errors.map((error) => (
              <Alert key={error} variant="danger">
                {error}
              </Alert>
            )) }
          </Col>
        </Row>
        <Row className="vehicle-contents">
          <Col lg={8}>
            <div className={`image-panel ${(!image) && 'dotted'}`}>
              <input type="file" onChange={onSelectFile} />
              {image ? <img src={image} alt={name} className="img-fluid" /> : (
                <>
                  Click to select an image
                  <br />
                  Or drag an drop it here.
                </>
              ) }
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
              <Button variant="primary" type="submit">
                <MdCheck />
                Create
                <AiOutlineRightCircle />
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default AddVehicle;
