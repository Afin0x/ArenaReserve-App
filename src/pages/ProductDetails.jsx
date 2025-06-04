import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products=[] }) => {
    const { id } = useParams();
    console.log(products);
    
    
    // console.log("Products Prop in ProductDetails:", products);
    // console.log("Params ID:", id); 

    const product = products.find((p) => p.id === parseInt(id));


    console.log(product);
    
    return (
        <Container>
            {!product ?( <h1>Product not found</h1>) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name}  />
                    </Col>

                    <Col md={6}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <h4>${product.price}</h4>
                    </Col>
                    
                </Row>
                
            )}
        </Container>
    );
};

export default ProductDetails;
