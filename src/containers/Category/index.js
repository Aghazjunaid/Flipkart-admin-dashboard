import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {getAllCategory} from '../../actions'

function Category(props) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.categories);

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])


  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px", marginBottom: "20px" }}>
              <h3>Category</h3>
              <Button variant="danger">Add</Button>
            </div>
          </Col>
        </Row>
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
