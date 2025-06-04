import { Card, Col, Container, Row, Button } from "react-bootstrap";
// import { useState } from "react";
import './Products.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Product({ products ,setCart}) {
  // const [cart, setCart] = useState({}); // Store count per product

  const {handleCartItem} = useContext(CartContext);
  
  
  // const addToCart = () => {
  //   setCart((prev ) => prev + 1)
  // };

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col md={6} lg={3} key={product.id || product.name}>
            <Card className="h-100">
              {/* <h2>Count: {setCart[product.id] || 0}</h2> Show count per product */}
              <Link to={`/products/${product.id}`}>
              <Card.Img className="card-img" variant="top" src={product.image} alt={product.name} />
              </Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="card-txt">{product.description}</Card.Text>
                <h4>${product.price}</h4>
                <Button variant="primary" onClick={() => handleCartItem()}>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
