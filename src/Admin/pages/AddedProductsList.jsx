import { Button, Modal, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts } from "../../redux/addProductSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const AddedProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch()
  // console.log(products);

  const [show, setShow] = useState(false);
  const [productTODelete,setProductToDelete] = useState(null) 
  const handleClose = () => setShow(false);




  const handleDelete = (id)=>{
    setProductToDelete(id)
    setShow(true);
  }

  const conformDelete =()=>{
    dispatch(deleteProducts(productTODelete));
    toast.error("product deleted")
  }
  return (
    <>
      {!products ? (
        <h2>No products added!</h2>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>product Name</th>
              <th>product Discription</th>
              <th>Price</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {products.map((product, i) => (
            <tbody key={i}>
              <tr>
                <td>{i + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productDiscription}</td>
                <td>₹{product.productPrice}</td>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    height={"100px"}
                  />
                </td>
                <td className="align-middle text-center">
                  <Link to={`/edit-roducts/${product.id}`}>
                    <FaEdit />
                  </Link>
                </td>
                <td className="align-middle text-center">
                  <Link >
                    <MdDelete onClick={()=>handleDelete(product.id)} />
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}


      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={conformDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddedProductList;
