import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./ChangePassword.css";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../redux/userSlice";
const ChangePassword = () => {
    const { Formik } = formik;
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.auth)
    const schema = yup.object().shape({
        currentPassword: yup
          .string()
          .required("Please enter your Current Password"),
        //   .min(3, "Full name must be at least 3 characters")
        newPassword: yup.string().required("Please enter your New password")
        .min(8, "Phone number must be at least 8 characters")
        .notOneOf([yup.ref('currentPassword')],'New PassWord cant be same as current password'),
        confirmPassword: yup
          .string()
          .required("Please Confirm your new password")
          .min(8, "Phone number must be at least 8 characters")
          .oneOf([yup.ref("newPassword")],'Must be same as new password')
      });
  return (
    <>
      <div className="change-pass-wrapper">
        <Card className="change-pass-card">
          <Card.Body>
            <Card.Title className="h3 text-center">Change Password</Card.Title>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => {
                dispatch(
                    updatePassword({
                    ...values,
                    role: user.role,
                    id: user.id,
                    status: user.status,
                  })
                );
                toast.success("User Profile updated sucessfully...");
                
              }}
              initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Row  >
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="validationFormik01">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Current password"
                          name="currentPassword"
                          value={values.currentPassword}
                          onChange={handleChange}
                          isValid={touched.currentPassword && !errors.currentPassword}
                          isInvalid={!!errors.currentPassword}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          {errors.currentPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} controlId="validationFormik02">
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="new password"
                          name="newPassword"
                          value={values.newPassword}
                          onChange={handleChange}
                          isValid={touched.newPassword && !errors.newPassword}
                          isInvalid={!!errors.newPassword}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          {errors.newPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row>
                      <Form.Group as={Col} controlId="validationFormikphone">
                        <Form.Label>confirm password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          isValid={touched.confirmPassword && !errors.confirmPassword}
                          isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Button type="submit" className="w-100 mt-3 ">
                      Change password
                    </Button>
                  </Form>
                </Row>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ChangePassword;
