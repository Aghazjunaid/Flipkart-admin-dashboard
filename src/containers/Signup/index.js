import React, {useState} from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";

function Signup() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      first,
      last,
      email,
      phone,
      password,
    };

    dispatch(signup(user));
  };


  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

  if(user.loading){
    return <p>Loading...!</p>;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row style={{ marginBottom: "15px" }}>
                <Col sm={6}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="First name"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    placeholder="Last name"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  placeholder="Enter Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
