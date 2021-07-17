import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions";

function Products() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
  
    useEffect(()=>{
      dispatch(getProducts())
    },[])
  

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
              <Button variant="danger">
                Add
              </Button>
            </div>
          </Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Desciption</th>
              <th>Price</th>
              <th>Currency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.products.data.length > 0 ?
                product.products.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
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
