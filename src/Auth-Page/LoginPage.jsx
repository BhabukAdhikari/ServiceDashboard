import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./auth.css";
import "./Login.css";
// import useAuth from '../AuthFunction/useAuth';

const LoginPage = () => {
  //   const { handleCompanyName }= useAuth();
  return (
    <div className="login-component">
      <h1 className="login-title">VERIFICATION</h1>
      <Form style={{ width: "100%", marginLeft: "-5%", marginTop: "5%" }}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ marginLeft: "20%", marginTop: "30px" }}
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Email"
            name="Email"
            style={{ width: "90%" }}
            required
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicRegistrationPasword"
          style={{ marginLeft: "20%", marginTop: "40px" }}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name=" password"
            style={{ width: "90%" }}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          style={{
            marginLeft: "20%",
            backgroundColor: "#39ac92",
            marginTop: "5%",
            border: "#39ac92",
            width: "72%",
            padding: "8px",
          }}
        >
          Login
        </Button>
      </Form>

      {/* <p>Create account signup</p> */}
    </div>
  );
};

export default LoginPage;
