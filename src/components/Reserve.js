import { useState } from 'react';
import { useParams } from 'react-router';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';

function Reserve() {
  const { vehicleId } = useParams();
  const vehicles = [
    {
      id: 1,
      name: 'vehicle 1',
      description: 'This is a description for vehicle 1',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$100',
    },
    {
      id: 2,
      name: 'vehicle 2',
      description: 'This is a description for vehicle 2',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$200',
    },
    {
      id: 3,
      name: 'vehicle 3',
      description: 'This is a description for vehicle 3',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$300',
    },
    {
      id: 4,
      name: 'vehicle 4',
      description: 'This is a description for vehicle 4',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: '$400',
    },
  ];

  const [{
    id, city, vehicle, date,
  }, setReserve] = useState({});

  const handleChange = (e) => {
    setReserve({
      id, city, vehicle, date, [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <Container className="reserve-cont">
        <Row>
          <Col lg={4}>
            <Row>
              <Form.Select onChange={handleChange} name="vehicles_id" required disabled={vehicleId !== undefined}>
                <option value="" hidden>Select Vehicle</option>
                {vehicles.map((vehicle) => (
                  <option
                    key={vehicle.id}
                    value={vehicle.id}
                    selected={`${vehicle.id}` === `${vehicleId}`}
                  >
                    {vehicle.name}
                  </option>
                ))}
              </Form.Select>
            </Row>
            <Row>
              <Form.Control type="text" placeholder="City" name="city" value={city} onChange={handleChange} />
            </Row>
            <Row>
              <Form.Control type="dateTime-local" placeholder="Date" name="date" value={date} onChange={handleChange} />
            </Row>
            <Row>
              <Button variant="primary" type="submit">Reserve</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default Reserve;
