import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button, Table, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {getAllCategory} from '../../actions'

function Category(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.categories);

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  function Example() {
  
    return (
      <>  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px", marginBottom: "20px" }}>
              <h3>Category</h3>
              <Button variant="danger" onClick={handleShow}>Add</Button>
            </div>
          </Col>
        </Row>
        <Example/>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.categoryName}</td>
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
            ))}
          </tbody>
        </Table>

      </Container>
    </Layout>
  );
}

export default Category;
