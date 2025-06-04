import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userSlice";

const EditProfile = () => {
    const { Formik } = formik;
    const {id} = useParams()
  const dispatch = useDispatch();
  const {users} = useSelector(state=>state.users)
  const navigate = useNavigate();
//   console.log("users-->",id);
  const user = users.find((usr)=>usr.id === parseInt(id)) ;
  console.log("user------->",user);
  
  
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .min(3, "Full name must be at least 3 characters"),
    email: yup.string().required("Please enter your email").email("Invalid email format"),
    phone: yup
      .string()
      .required("Please enter your phone number")
      .min(10, "Phone number must be at least 10 characters")
      .matches(/^[0-9]{10}$/, "Phone number must contain only digits")
  });
  return (
    <Container>
      <h1 className="text-center">Register</h1>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(
            updateUser({
              ...values,
              role:user.role,
              id: user.id,
              status: user.status,
            })
          );
          toast.success("User Profile updated sucessfully...");
          navigate(`/profile/${id}`);
        }}
        initialValues={{
          fullName: user.fullName ,
          email: user.email ,
          phone: user.phone
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Row md={4} className="justify-content-center">
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationFormik01">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isValid={touched.fullName && !errors.fullName}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="validationFormik02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="validationFormikphone">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="phone number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>


              <Button type="submit" className="w-100 mt-3 mb-5">
                Submit form
              </Button>
            </Form>
          </Row>
        )}
      </Formik>
    </Container>
  );
};

export default EditProfile;
