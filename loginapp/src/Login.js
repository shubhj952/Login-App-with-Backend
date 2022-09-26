import React, { useState } from 'react';
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import Dashboard from "./Dashboard";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [loginTrue, setLoginTrue] = useState(false);

  const updateData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/user_login_check`, formData)
      .then((res) => {
        if (res.data.check === 200) {
          setLoginTrue(true);
          setLoginData(res.data.data);
          localStorage.setItem("username", res.data.data[0].username);
        } else {
          alert("this is not correct")
        }
      })
      .catch((error) => console.log(error));
  };

  return (
      <>
        {loginTrue ? (
          <Dashboard loginData= {loginData} />
        ) : (
          <Modal show={true} centered>
            <Modal.Header className="text-center w-100" style={{ backgroundColor: "#b18bbe" }}>
              <Modal.Title className="text-center w-100">Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className="justify-content-right w-100">
              <Form onSubmit={checkLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={updateData}
                    placeholder="Enter User Name..."
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={updateData}
                    placeholder="Enter your password here..."
                  />
                </Form.Group>
                <Button type="submit">Login</Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </>
  );
}
