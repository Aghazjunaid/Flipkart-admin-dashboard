import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../actions";
import { useHistory } from "react-router-dom";

function Orders() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
console.log("orders", order)
    useEffect(()=>{
        dispatch(getOrders())
      },[])

    return (
        <Layout sidebar>
        <Container>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px", marginBottom: "20px" }}>
                <h3>Orders</h3>
                {/* <Button variant="danger" onClick={handleShow}>Add</Button> */}
              </div>
            </Col>
          </Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Status</th>
                <th>Product</th>
                <th>Quantity</th>
                {/* <th>Delivery Address</th> */}
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {order.orders.map((item, index) => (
                <tr key={index}>
                  <td>{item.orderNumber}</td>
                  <td>{item.status}</td>
                  <td>{item.product.productId.name}</td>
                  <td>{item.product.quantity}</td>
                  {/* <td>{item.deliveryAddress.addressLine_1}, {item.deliveryAddress.city}, {item.deliveryAddress.state}, {item.deliveryAddress.pincode}</td> */}
                  <td>Rs {item.charges.total.toFixed(2)}</td>

                  <td>
                    {/* <Button
                      style={{ cursor:"pointer"}}
  
                      variant="danger"
                      onClick={() => {
                        deleteData(item._id);
                      }}
                    >
                      Delete
                    </Button> */}
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
        )
}

export default Orders
