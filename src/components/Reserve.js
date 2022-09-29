import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
  Container, Row, Col, Form, Button, Alert,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation, setError } from '../redux/reservations/reservations';
import { loadVehicles, showVehicle } from '../redux/vehicles/vehicles';

import '../styles/Reserve.scss';

function Reserve() {
  const dispatch = useDispatch();
  const { vehicleId: urlVehicleId } = useParams();
  const vehicles = useSelector((state) => state.vehicles.visible);
  const error = useSelector((state) => state.reservations.error);
  const selectedVehicle = useSelector((state) => state.vehicles.current);

  const [reservation, setReserve] = useState({});
  const [reservedDates, setReservedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const {
    city, vehicle_id: vehicleId,
  } = reservation;

  const handleChange = (e) => {
    setReserve({
      ...reservation, [e.target.name]: e.target.value,
    });
    if (e.target.name === 'vehicle_id') {
      dispatch(showVehicle(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDateString = selectedDate.toLocaleDateString();
    const reservedDateStrings = reservedDates.map((date) => date.toLocaleDateString());

    if (reservedDateStrings.includes(selectedDateString)) {
      dispatch(setError('Sorry that date has already been booked.'));
    } else {
      [reservation.date] = selectedDate.toISOString().split('T');
      dispatch(addReservation(reservation));
    }
  };

  useEffect(() => {
    dispatch(loadVehicles());
  }, []);

  useEffect(() => {
    setReserve({ ...reservation, vehicle_id: urlVehicleId });
    dispatch(showVehicle(urlVehicleId));
  }, [urlVehicleId]);

  useEffect(() => {
    if (selectedVehicle?.reservations) {
      const reservedDate = selectedVehicle.reservations.map(
        (reservation) => new Date(reservation.date),
      );

      setReservedDates(reservedDate);
    }
  }, [selectedVehicle]);

  return (
    <div
      className="ReserveVehicle"
    >
      <Form onSubmit={handleSubmit} className="form-reserv justify-content-around">
        <Container>
          <Row className="reserve-row d-flex justify-content-around align-content-center">
            <Col lg={5}>
              <h1 className="reserve-title text-center">Book This Vehicle</h1>
              {error && <Alert>{error}</Alert>}
              <Row>
                <Form.Select
                  onChange={handleChange}
                  name="vehicle_id"
                  value={vehicleId}
                  defaultValue={Number.parseInt(urlVehicleId || '-1', 10)}
                  required
                  disabled={urlVehicleId !== undefined}
                  className="mb-3 mt-5 w-lg-25"
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
                <Form.Control className="mb-3 w-lg-25" type="text" placeholder="City" name="city" value={city} onChange={handleChange} />
              </Row>
              <Row>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  excludeDates={reservedDates}
                  className="mb-3 w-lg-25 form-control"
                />
              </Row>
              <Row>
                <Button variant="primary" type="submit">Reserve</Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Reserve;
