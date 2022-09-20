import { useState } from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';

function Reserve() {
  const [{
    id, city, date,
  }, setReserve] = useState({});

  const handleChange = (e) => {
    setReserve({
      id, city, date, [e.target.name]: e.target.value,
    });
  };
  return (
    <Form>
      <Container className="reserve-cont">
        <Row>
          <Col lg={4}>
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
