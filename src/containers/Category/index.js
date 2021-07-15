import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";

function Category(props) {
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <Row style={{marginTop: '10px'}}>
              <Col md={4} style={{ fontSize: '25px'}}>Category</Col>
              <Col
                md={{ span: 4, offset: 4 }} style={{textAlign: 'center'}}>
                    <Button variant="danger">Add</Button>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Category;
