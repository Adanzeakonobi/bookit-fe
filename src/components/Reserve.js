import { useState } from 'react';
import { useParams } from 'react-router';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';

function Reserve() {
  const dispatch = useDispatch();
  const { vehicleId: urlVehicleId } = useParams();
  const vehicles = useSelector((state) => state.vehicles.visible);
  const user = useSelector((state) => state.user.user);

  const [reservation, setReserve] = useState({ user_id: user.id });
  const {
    city, date, vehicle_id: vehicleId,
  } = reservation;

  const handleChange = (e) => {
    setReserve({
      ...reservation, [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservation));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="reserve-cont">
        <Row>
          <Col lg={4}>
            <Row>
              <Form.Select
                onChange={handleChange}
                name="vehicle_id"
                value={vehicleId}
                defaultValue={Number.parseInt(urlVehicleId || '-1', 10)}
                required
                disabled={urlVehicleId !== undefined}
              >
                <option value="" hidden>Select Vehicle</option>
                {vehicles.map((vehicle) => (
                  <option
                    key={vehicle.id}
                    value={vehicle.id}
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
