import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { Container } from "react-bootstrap";

const ConstactForm = () => {

    const { Formik } = formik;
    
      const schema = yup.object().shape({
        fullName: yup
          .string()
          .required("Please enter your full name")
          .min(3, "Full name must be at least 3 characters"),
        email: yup.string().required("Please enter your email").email("Invalid email format"),
        message: yup
          .string()
          .required("Please enter your message")
          .min(20, "message must be at least 20 characters"),
        phone: yup
          .string()
          .required("Please enter your phone number")
          .min(10, "Phone number must be at least 10 characters")
          .matches(/^[0-9]{10}$/, "Phone number must contain only digits"),
      });

    return(
        <Container>

    <h1 className="text-center">Contact us</h1>
        <Formik 
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        fullName: "",
        email: "",
        message: "",
        phone: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Row md={4} className="justify-content-center">
            <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3" >
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
              <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            </Row>

            <Row>
            <Form.Group as={Col}  controlId="validationFormikphone">
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
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Row>

            <Row>
            <Form.Group as={Col}  controlId="validationFormik03">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea"
                type="textarea"
                placeholder="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="w-100 mt-3 mb-5">Submit </Button>
        </Form>
        </Row>
      )}
    </Formik>
    </Container>
    )
}

export default ConstactForm