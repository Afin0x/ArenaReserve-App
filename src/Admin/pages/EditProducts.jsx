import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProducts } from "../../redux/addProductSlice";
import { toast } from "react-toastify";

const EditProducts =()=>{
    const { id } = useParams();
    console.log("ID---------->",id);
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const {products} = useSelector(state=>state.products)
    const [validated, setValidated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDiscription, setProductDiscription] = useState("");
  const [imageUrl, setImageUrl] = useState("");


  const product = products.find((prdt)=>prdt.id === parseInt(id))
  console.log('product----->',product);
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const addedProductDetails = {
        productName ,
        productDiscription,
        imageUrl,
        productPrice,
      };
      console.log("edited product-------->",addedProductDetails);
      dispatch(editProducts(addedProductDetails))
      toast.success(" product edited sucessfully!")
      Navigate('/Admin/Pages/productList')
    }

    setValidated(true);
  };
    return(
     <>
        {product ? (
               <div className="d-flex justify-content-center align-items-center ">
               <Container className="w-50 p-4 shadow rounded bg-white">
                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
                   <Row className="text-center mb-3">
                     <Col>
                       <h4>Edit Product</h4>
                     </Col>
                   </Row>
         
                   <Row className="mb-3">
                     <Form.Group as={Col} controlId="validationCustom01">
                       <Form.Label>Product Name</Form.Label>
                       <Form.Control
                         required
                         type="text"
                         placeholder="Enter product name"
                         defaultValue={product.productName}
                         onChange={(event) => setProductName(event.target.value)}
         
                       />
                       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                       <Form.Control.Feedback type="invalid">
                         Enter product name.
                       </Form.Control.Feedback>
                     </Form.Group>
                   </Row>
         
                   <Row className="mb-3">
                     <Form.Group as={Col} controlId="validationCustom02">
                       <Form.Label>Product Price</Form.Label>
                       <Form.Control
                         required
                         type="text"
                         placeholder="Enter product price"
                         defaultValue={product.productPrice}
                         onChange={(event) => setProductPrice(event.target.value)}
                       />
                       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                       <Form.Control.Feedback type="invalid">
                         Enter product price.
                       </Form.Control.Feedback>
                     </Form.Group>
                   </Row>
         
                   <Row className="mb-3">
                     <Form.Group as={Col} controlId="validationCustom03">
                       <Form.Label>Product Description</Form.Label>
                       <Form.Control
                         required
                         type="text"
                         placeholder="Enter description"
                         defaultValue={product.productDiscription}
                         onChange={(event) => setProductDiscription(event.target.value)}
                       />
                       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                       <Form.Control.Feedback type="invalid">
                         Enter description.
                       </Form.Control.Feedback>
                     </Form.Group>
                   </Row>
         
                   <Row className="mb-3">
                     <Form.Group as={Col} controlId="validationCustom04">
                       <Form.Label>Image URL</Form.Label>
                       <InputGroup hasValidation>
                         <InputGroup.Text>URL</InputGroup.Text>
                         <Form.Control
                           type="text"
                           placeholder="Enter image URL"
                           required
                           defaultValue={product.imageUrl}
                           onChange={(event) => setImageUrl(event.target.value)}
                         />
                         <Form.Control.Feedback type="invalid">
                           Please enter a valid URL.
                         </Form.Control.Feedback>
                       </InputGroup>
                     </Form.Group>
                   </Row>
         
                   <Row>
                     <Col>
                       <Button className="w-100" type="submit">
                         Submit
                       </Button>
                     </Col>
                   </Row>
                 </Form>
               </Container>
             </div>
        ):(
            <Row className="text-center mb-3">
                     <Col>
                       <h5>No Products found!</h5>
                     </Col>
                   </Row>
        )}
     </>
    )
}

 export default EditProducts;