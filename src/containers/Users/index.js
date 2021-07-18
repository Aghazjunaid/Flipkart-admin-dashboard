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
import { getUsers, } from "../../actions";
import { useHistory } from "react-router-dom";

function User() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log("user", user)

    useEffect(()=>{
        dispatch(getUsers())
      },[])
    

    return (
        <Layout sidebar>
        <Container>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px", marginBottom: "20px" }}>
                <h3>Users</h3>
                {/* <Button variant="danger" onClick={handleShow}>Add</Button> */}
              </div>
            </Col>
          </Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.users.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  {item.role && <td>{item.role.name}</td>}
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.profile.addressLine_1}, {item.profile.city}, {item.profile.state}, {item.profile.zipcode}</td>

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

export default User
