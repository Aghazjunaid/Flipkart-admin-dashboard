import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory, addCategory, deleteCategories } from "../../actions";
import { useHistory } from "react-router-dom";

function Products() {
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

      </Container>
    </Layout>
  );
}

export default Products;
