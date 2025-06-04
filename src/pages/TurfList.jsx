import React from "react";
import FilterSideBar from "../Components/FilterSideBar";
import FilterSideBarSmall from "../Components/FilterSideBarSmall";
import TurfCard from "../Components/TurfCard";
// import turfs from "./Data/Turfs";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./TurfList.css"; // Make sure updated CSS is here
import { useSelector } from "react-redux";

const TurfList = () => {
  const { turfs } = useSelector((state) => state.turfs);
  return (
    <Container fluid className="turf-list-container">
      <div className="turf-list-content ">
        <Row className="gx-5">
          {/* Sidebar */}
          <Col
            xs={12}
            md={3}
            className="mb-4 mb-md-0 possition-filter d-none  d-lg-block"
          >
            <FilterSideBar />
          </Col>
          <Col
            xs={12}
            md={3}
            className="mb-4 mb-md-0 possition-filter d-block  d-lg-none"
          >
            <FilterSideBarSmall />
          </Col>

          {/* Turf Cards */}
          <Col xs={12} md={9}>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-extrabold text-white tracking-wide mt-5">
                Explore Top Turfs
              </h1>
              <p className="text-white mt-2 text-base">
                Book your favorite turf easily & instantly!
              </p>
            </motion.div>

            <Row className="g-4">
              {turfs.map((turf, index) => (
                <Col key={index} xs={12} sm={6} lg={4}>
                  <motion.div
                    className="hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TurfCard turf={turf} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TurfList;
