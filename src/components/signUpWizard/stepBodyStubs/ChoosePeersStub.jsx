//src/assets/ChoosePeersForm.jsx
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ChoosePeersStub({ SW, previousStep, onSubmit }) {
  return (
    <Form
      // onSubmit={(e) => {
      //   e.preventDefault();
        //do API Call for sharing seed phrases
        // .then{
        // onSubmit();
        // SW.goToNamedStep("finishReg");
        //}
      // }}
    >
   
      <Form.Group className="mb-3" controlId="formChoosePeers">
        <Form.Label>Choose Peers</Form.Label>
        <Form.Control type="text" placeholder="Number of Peers" />
      </Form.Group>
      <Button variant="primary" type="button">
        Find Peers by nickname
      </Button>
 
    </Form>
  );
}

export default ChoosePeersStub;
