import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, updateRole, updateStatus } from "../../redux/userSlice";


const UserList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const changeUserRole = (id, role) => {
    dispatch(updateRole({id,role}))
  };
  console.log("user------->", users);

  const changeUserStatus = (id)=>{
    console.log("iddd-------->",id);
    
    dispatch(updateStatus(id))
  }
  const handleOnClick = () => {
    localStorage.removeItem("users");
    dispatch(clearUser());
  };
  return (
    <Container>
      <Row className="" id="user_list_row">
        <Col className="text-center">
          {users.length < 1 ? (
            <Row>
              <Col>
                <h3>No users found!</h3>
              </Col>
            </Row>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <td className="align-middle text-center">
                      <Form.Select
                        defaultValue={user.role}
                        value={user.role}
                        onChange={(e) =>
                          changeUserRole(user.id, e.target.value)
                        }
                      >
                        <option value="admin">Admin</option>
                        <option value="user">user</option>
                      </Form.Select>
                    </td>
                    <td className="align-middle text-center">
                      <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label={user.status}
                        defaultChecked={user.status}
                        value={user.status}
                        onClick={()=>changeUserStatus(user.id)}
                      />
                      </Form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <Row>
        {localStorage.getItem("users") ? (
          <Button onClick={handleOnClick}>Clear user detais</Button>
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default UserList;
