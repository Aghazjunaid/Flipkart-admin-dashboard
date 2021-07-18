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
    return (
        <Layout sidebar>

        </Layout>
        )
}

export default Orders
