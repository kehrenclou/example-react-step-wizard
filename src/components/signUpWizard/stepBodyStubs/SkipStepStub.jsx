//src/assets/SkipStepForm.jsx
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function SkipStepStub({}) {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formSkipStepPhrase">
        <Form.Text className="text-muted">SkipStepStub</Form.Text>

        <Form.Label>Repeat your seed phrase</Form.Label>
        <Form.Control type="text" placeholder="Enter 12 word seed phrase" />
        <Form.Text className="text-muted">
          Write down your seed phrase
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default SkipStepStub;
