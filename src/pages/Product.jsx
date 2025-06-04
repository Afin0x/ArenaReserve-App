import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const { products } = useSelector((state) => state.products);
  // console.log("prducts",products);
  
  return (
    <>
      <Container>
        <Row>
          {products.map((product, i) => (
            <Col md={4} key={i} className="my-4">
              <Card>
                <Link to={`/products/${product.id}`}>
                  <Card.Img variant="top" src={product.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.productDiscription}</Card.Text>
                  <Button variant="primary">Add to cart </Button>
                </Card.Body>
              </Card>
              
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;
