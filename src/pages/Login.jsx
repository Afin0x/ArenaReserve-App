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
import "./Login.css"; // Make sure to have a separate CSS for login styling.
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const dispatch = useDispatch()
  const {users} = useSelector(state=>state.users)
  const navigate = useNavigate()
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      const loginDetails ={
        email,
        password
      }
      console.log("loginDetails---->",loginDetails);

      const loggedUser = users.find((usr)=>usr.email === loginDetails.email)

      if(!loggedUser){
        return toast.error("incorrect email")
      }

      if(loggedUser.password !== loginDetails.password){
        return toast.error("Incorrect password")
      }

        dispatch(userLogin({...loginDetails,id:loggedUser.id,role:loggedUser.role,username:loggedUser.username}))
        toast.success("Login Sucess.....")
        navigate("/")
    }

    setValidated(true);
  };

  return (
    <main className="home">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        {/* Animated Card Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Card
            className="login-form shadow-lg p-4 rounded-5 w-100"
            style={{ maxWidth: "500px" }}
          >
            <Card.Body>
              <h2 className="text-center mb-4 text-success">
                Login to Your Account
              </h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationEmail">
                    <FloatingLabel controlId="floatingEmail" label="Email">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                        onChange={(event)=>setEmail(event.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationPassword">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter your password"
                        onChange={(event)=>setPassword(event.target.value)}

                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your password.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Col md="12">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-100 btn btn-success"
                      type="submit"
                    >
                      Login
                    </motion.button>
                  </Col>
                </Row>
              </Form>

              {/* If the user doesn't have an account */}
              <Row className="mt-3">
                <Col className="text-center">
                  <p>
                    Don't have an account?{" "}
                    <a href="/register" className="text-success">
                      Create one here.
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

export default Login;
