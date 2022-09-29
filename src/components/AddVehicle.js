import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { MdCheck } from 'react-icons/md';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { addVehicle } from '../redux/vehicles/vehicles';
import '../styles/AddVehicle.scss';
import { getAuth, uploadFile } from '../redux/uploadcare/uploadcare';

const DEFAULT_VALUES = {
  name: '',
  price: 0,
  image: undefined,
  visible: true,
};

function AddVehicle() {
  const dispatch = useDispatch();
  const {
    vehicles: { notice },
    uploadcare: { auth, url: imageUrl },
  } = useSelector((state) => state);
  const [vehicle, setVehicle] = useState({ ...DEFAULT_VALUES });
  const [uploading, setUploading] = useState(undefined);
  const {
    price, name, image,
  } = vehicle;

  useEffect(() => {
    if (notice) {
      setVehicle({ ...DEFAULT_VALUES });
    }
  }, [notice]);

  useEffect(() => {
    if (imageUrl) {
      setVehicle({
        ...vehicle, image: imageUrl,
      });
    }
  }, [imageUrl]);

  useEffect(() => {
    if (!auth)dispatch(getAuth());
    else if (new Date(auth.expire) <= Date.now()) {
      dispatch(getAuth());
    } else if (uploading) {
      dispatch(uploadFile(auth, uploading));
      setUploading(undefined);
    }
  }, [uploading, auth]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setVehicle({
        ...vehicle, image: undefined,
      });
      return;
    }
    const file = e.target.files[0];
    setUploading(file);
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
        <Row className="errors align-items-end">
          <Col>
            <h1 className="text-center">Add Vehicle</h1>
          </Col>
        </Row>
        <Row className="vehicle-contents">
          <Col lg={8}>
            <div className={`image-panel ${(!image) && 'dotted'}`}>
              <input type="file" onChange={onSelectFile} />
              {image
                ? <img src={image} alt={name} className="img-fluid" /> : (
                  <>
                    {uploading
                      ? (
                        <>
                          Uploading...
                        </>
                      )
                      : (
                        <>
                          Click to select an image
                          <br />
                          Or drag an drop it here.
                        </>
                      )}
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
              <Button variant="primary" type="submit" disabled={!(image)}>
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
