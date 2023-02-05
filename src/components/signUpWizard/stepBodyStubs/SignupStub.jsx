
import React,{ useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { WizardContext } from "../SignUpWizard";

function SignupStub() {
  const store = React.useContext(WizardContext);

  const handleUpdate = (e) => {
    store.updateForm(e.target.name, e.target.value);
  };

  return (
    <Form onChange={handleUpdate}>
      <Form.Group as={Row} className="mb-3">
        <Form.Text className="text-muted">SignUpForm</Form.Text>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formSignupEmail">
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formSignupPassword">
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formSignupPasswordRepeat"
      >
        <Form.Control type="password" placeholder=" Repeat Password" />
      </Form.Group>
      <Form.Text className="text-muted">
        Password should be at least 10 characters
      </Form.Text>
      <Form.Group as={Row}></Form.Group>
    </Form>
  );
}

export default SignupStub;
