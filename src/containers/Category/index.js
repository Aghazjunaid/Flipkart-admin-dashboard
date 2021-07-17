import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button, Table, Modal, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {getAllCategory, addCategory, deleteCategories} from '../../actions'
import {useHistory} from 'react-router-dom';

function Category(props) {
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory()

  const handleClose = () => {

    if (categoryName === "") {
        alert('Category name is required');
        setShow(false);
        return;
    }
    const catData = {
      categoryName
    }
    dispatch(addCategory(catData));
    history.push("/category")
    setShow(false);

  }
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.categories);

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

//   const addCategory = (e) => {
//     e.preventDefault();
//     handleClose();
// debugger
//     dispatch(addCategory(categoryName));
//   };

async function deleteData(_id) { 
  dispatch(deleteCategories(_id));
  history.push("/category")

}


  function Example() {
  
    return (
      <>  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{textDecoration: "center"}}>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group>
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter Category"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Add Category
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
                  <Button
                    style={{ cursor:"pointer"}}

                    variant="danger"
                    onClick={() => {
                      deleteData(item._id);
                    }}
                  >
                    Delete
                  </Button>
                  {/* <Link to={"update/"+item._id}>
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
