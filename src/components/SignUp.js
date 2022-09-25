import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signup, setErrors } from '../redux/userRegistrations/userRegistrations';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.userRegistrations.error);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username && user.email && user.password && user.passwordConfirmation) {
      if (user.password === user.passwordConfirmation) {
        dispatch(signup(user, navigate));
      } else {
        dispatch(setErrors(['Passwords do not match']));
      }
    } else {
      dispatch(setErrors(['Username, email and password are required']));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
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

export default SignUp;
