import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {getAllCategory} from '../../actions'

function Category(props) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])


  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
              <h3>Category</h3>
              <Button variant="danger">Add</Button>
            </div>
          </Col>
        </Row>
        
      </Container>
    </Layout>
  );
}

export default Category;
