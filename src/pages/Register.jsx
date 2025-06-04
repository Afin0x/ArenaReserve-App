import { useState } from "react";
import {
  Col,
  Row,
  Form,
  Container,
  Card,
  FloatingLabel,
} from "react-bootstrap";
import { motion } from "framer-motion";
import "./Register.css";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [role, setRole] = useState("");
  const [formDisabled, setFormDisabled] = useState(true);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormDisabled(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const userDetails = {
        username,
        email,
        password,
        role,
      };
      console.log("userDetails------->", userDetails);
      dispatch(userRegister({ ...userDetails, id: Date.now() }));
      navigate("/login");
    }
    setValidated(true);
  };

  return (
    <main className="home">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100 px-3"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Card className="register-form shadow-lg ">
            <Card.Body>
              <h2>Create an Account</h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationRole">
                    <FloatingLabel controlId="floatingRole" label="Select Role">
                      <Form.Select
                        className="select-dropdown"
                        required
                        value={role}
                        onChange={handleRoleChange}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="user">To book Turf</option>
                        <option value="admin">Turf Owner</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select a role.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationUsername">
                    <FloatingLabel
                      controlId="floatingUsername"
                      label="Username"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your username"
                        disabled={formDisabled}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a username.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationEmail">
                    <FloatingLabel controlId="floatingEmail" label="Email">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                        disabled={formDisabled}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationPassword">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter your password"
                        disabled={formDisabled}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a password.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Col md="12">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn btn-success"
                      type="submit"
                      disabled={formDisabled}
                    >
                      Register
                    </motion.button>
                  </Col>
                </Row>
              </Form>

              <Row className="my-3">
                <Col className="text-center">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" className="text-success">
                      Login here.
                    </a>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </main>
  );
};

export default Register;
