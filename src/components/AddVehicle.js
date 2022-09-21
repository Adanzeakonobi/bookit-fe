import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container, Row, Col, Alert, Form, Button,
} from 'react-bootstrap';
import { MdCheck } from 'react-icons/md';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { addVehicle } from '../redux/vehicles/vehicles';
import '../styles/AddVehicle.scss';

function AddVehicle() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [vehicle, setVehicle] = useState({});
  const {
    price, name, image,
  } = vehicle;

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setVehicle({
        ...vehicle, image: undefined,
      });
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setVehicle({
        ...vehicle, image: reader.result,
      });
    };
    reader.onerror = () => {
      setErrors([`Error occurred reading file: ${file.name}`]);
    };
  };
  const handleChange = (e) => {
    setVehicle({
      ...vehicle, [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVehicle(vehicle));
  };
  return (
    <Form className="AddVehicle" onSubmit={handleSubmit}>
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
