import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Table, Form, Modal
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, addProduct } from "../../actions";
import {useHistory} from 'react-router-dom';

function Products() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [currency, setCurrency] = useState("");
  const [category, setCategory] = useState("");
  const history = useHistory()

  const [show, setShow] = useState(false);

  const handleClose = () => {
debugger
    const proData = {
      name,
      description,
      price,
      currency,
      category
    }
    dispatch(addProduct(proData));
    history.push("/product")

    setShow(false);

  }
  const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
  
    useEffect(()=>{
      dispatch(getProducts())
    },[])
  
    function Example() {
  
      return (
        <>  
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{textDecoration: "center"}}>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Product</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Product"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter Category"
                />
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      placeholder="Enter price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Select Currency</Form.Label>
                    <Form.Control
                      as="select"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option>Select Currency</option>
                      <option value="Dollar">Dollar</option>
                      <option value="Rupee">Rupee</option>
                      <option value="Euro">Euro</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Description"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Add Product
              </Button>
            </Form>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  



  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
                marginBottom: "20px",
              }}
            >
              <h3>Product</h3>
              <Button variant="danger" onClick={handleShow}>
                Add
              </Button>
            </div>
          </Col>
        </Row>
        <Example/>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Desciption</th>
              <th>Price</th>
              <th>Currency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.products.length > 0 ?
                product.products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category.categoryName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.currency}</td>
                <td>
                  {/* <Button
                    style={{ margin: "8px", cursor:"pointer"}}

                    variant="danger"
                    onClick={() => {
                      deleteData(item._id);
                    }}
                  >
                    Delete
                  </Button>
                  <Link to={"update/"+item._id}>
                  <Button
                  style={{ margin: "8px" }}
                    variant="primary"
                  >
                    Update
                  </Button>

                  </Link> */}
                </td>
              </tr>
            )): null}
          </tbody>
        </Table>

      </Container>
    </Layout>
  );
}

export default Products;
