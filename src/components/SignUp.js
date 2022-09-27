import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signup, setErrors } from '../redux/userRegistrations/userRegistrations';
import '../styles/Auth.scss';

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
    <div className="no-auth-layout orange-background">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} className="form-container">
              <div className="form-title">Sign Up</div>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
                  onChange={handleChange}
                />
              </Form.Group>
              <p>
                <span>Already have an account? </span>
                <Link to="/login">Login!</Link>
              </p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div className="errors">
              {error && (
                <p>{error}</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
