import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login, setErrors } from '../redux/userSessions/userSessions';
import '../styles/Auth.scss';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const loginButton = useRef();

  const handleChange = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    loginButton.current.disabled = true;
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(login(user, navigate));
    } else {
      dispatch(setErrors(['Email and password are required']));
    }
  };

  return (
    <div className="no-auth-layout orange-background">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} className="form-container">
              <div className="form-title">Login</div>
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
              <p>
                <span>Don&apos;t have an account? </span>
                <Link to="/signup">Sign Up!</Link>
              </p>
              <Button variant="primary" type="submit" ref={loginButton}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
