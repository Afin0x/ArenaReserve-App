import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "./profile.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  const { users } = useSelector((state) => state.users);
  const { id } = useParams();
  // console.log("user----->",users);
  // console.log("find->",users.find((usr)=>usr.id === Number(id)));

  const userProfile = users.find((usr) => usr.id === Number(id));
  // console.log("userProfile------->",userProfile);

  return (
    <Container>
      <Row>
        <Card className="p-0">
          <Card.Img
            height={250}
            className="w-100"
            variant="top"
            src="https://e0.pxfuel.com/wallpapers/944/332/desktop-wallpaper-linkedin-background-linkedin.jpg"
          />
          <Card.Body className="user_profile_pic_body">
            <Row>
              <Col md={2}>
                <Image
                  roundedCircle
                  className="user_profile_pic border border-4 border-light shadow"
                  height={170}
                  src="https://wallpapers.com/images/featured/cool-discord-profile-pictures-fj54esyux5ttr01a.jpg"
                  alt="Profile Photo"
                />
              </Col>
              <Col md={10} className="d-flex align-items-center">
                <div>
                  <h3 className="text-light">
                    {userProfile.fullName}{" "}
                    <Link to={`/edit-profile/${id}`}>
                      <CiEdit size={20} className="mb-4 text-info" />
                    </Link>
                  </h3>
                  <h5>Web Developer</h5>
                  <p>
                    <FaPhoneSquareAlt /> {userProfile.phone} | <CgMail />{" "}
                    {userProfile.email}
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Profile;
