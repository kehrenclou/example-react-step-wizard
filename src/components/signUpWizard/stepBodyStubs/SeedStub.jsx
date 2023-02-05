//assets/form/SeedForm.jsx
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { WizardContext } from "../SignUpWizard";


function SeedStub() {
  const store = React.useContext(WizardContext);

  const handleUpdate = (e) => {
    store.updateSeeds(e.target.name, e.target.value);
  };

  return (
    <Form onChange={handleUpdate}>
      <Form.Group as={Row}>
        <Form.Label className="text-muted">SeedForm</Form.Label>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formSeedPhrase">
        <Form.Label className="text-muted">Save your see phrase</Form.Label>
        <Form.Control type="text" placeholder="seeds" name="seeds" />
        <Button variant="primary" type="button">
          Regenerate
        </Button>
        <Form.Text className="text-muted">
          Write down your seed phrase
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default SeedStub;
