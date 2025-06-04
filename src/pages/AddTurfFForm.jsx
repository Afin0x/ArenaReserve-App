import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { addTurfs } from "../redux/addTurf";
import "./AddTurfFForm.css";
import { useNavigate } from "react-router-dom";

function AddTurfForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
    features: [""],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (e, index) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      features: newFeatures,
    }));
  };

  const handleAddFeature = () => {
    setFormData((prevData) => ({
      ...prevData,
      features: [...prevData.features, ""],
    }));
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      features: newFeatures,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.location ||
      !formData.price ||
      !formData.image ||
      formData.features.some((feature) => !feature)
    ) {
      alert("Please fill out all fields");
      return;
    }
    console.log("Turf Details Submitted: ", formData);
    dispatch(addTurfs({ ...formData, id: Date.now() }));
    navigate("/turf-list");
  };

  return (
    <Container className="turf-zone">
      <h2 className="turf-zone-heading">Add Turf Details</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name and Location */}
        <Row className="row mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label className="input-label">Name</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLocation">
            <Form.Label className="input-label">Location</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Price */}
        <Row className="row mb-3">
          <Form.Group as={Col} controlId="formPrice">
            <Form.Label className="input-label">Price (per hour)</Form.Label>
            <Form.Control
              className="input-field"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Image */}
        <Row className="row mb-3">
          <Form.Group as={Col} controlId="formImage">
            <Form.Label className="input-label">Image URL</Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Features */}
        <h5 className="features-heading">Features:</h5>
        {formData.features.map((feature, index) => (
          <Row key={index} className="row mb-3">
            <Form.Group as={Col}>
              <Form.Label className="input-label">
                Feature {index + 1}
              </Form.Label>
              <Form.Control
                className="input-field"
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(e, index)}
              />
            </Form.Group>
            <Button
              variant="danger"
              type="button"
              onClick={() => handleRemoveFeature(index)}
              className="remove-btn ms-2"
            >
              Remove
            </Button>
          </Row>
        ))}

        <Button
          className="add-feature-btn"
          onClick={handleAddFeature}
          type="button"
        >
          Add Feature
        </Button>
        <Button className="submit-btn ms-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddTurfForm;
