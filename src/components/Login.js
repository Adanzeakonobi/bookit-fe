import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login, setErrors } from '../redux/userSessions/userSessions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(login(user, navigate));
    } else {
      dispatch(setErrors(['Email and password are required']));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            <span>Don&apos;t have an account? </span>
            <Link to="/sign_up">Sign Up Today!</Link>
          </p>
          <div className="errors">
            {error && (
              <p>{error}</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
