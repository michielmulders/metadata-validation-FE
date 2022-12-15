import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ValidationResults from "../ValidationResults";

import API from "../../api";

const NFTFormValidation = () => {
  const [form, setForm] = useState({
    network: "mainnet",
    tokenId: "",
    serial: "",
    version: "1.0.0"
  });
  const [formErrors, setFormErrors] = useState({});
  const [validationErrors, setValidationErrors] = useState({
    errors: [],
    warnings: [],
    visible: false,
    success: false,
    metadata: {},
    errorMsg: ""
  });

  const setField = (field, value) => {
    setForm({
        ...form,
        [field]: value
    })

    if (!!formErrors[field]) {
        setFormErrors({
            ...formErrors,
            [field]: ""
        })
    }
  }

  const validateForm = () => {
    const { tokenId, serial } = form;
    const newErrors = {};

    const tokenIdRegex = new RegExp(/0\.0\.[0-9]+/, 'g');
    if (tokenId === '' || !tokenIdRegex.test(tokenId)) 
        newErrors.tokenId = 'Please enter the correct tokenId format';
    if (serial < 1 || serial > 1_000_000) 
        newErrors.serial = 'Please enter a serial between 1 and 1,000,000';

    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
    } else {
      try {
        const { data } = await API.NFTs.validate(form.tokenId, form.serial, form.network, form.version);
        setValidationErrors({
          ...validationErrors,
          visible: true,
          success: data.success,
          errors: data.data.errors,
          warnings: data.data.warnings,
          metadata: data.data.metadata,
          errorMsg: ""
        })
      } catch (error) {
        const errorMsg = error.response.data.msg || `Sorry, something went wrong validating your NFT against HIP412@${form.version}`;
        setValidationErrors({
          ...validationErrors,
          visible: true,
          success: false,
          errorMsg
        });
      }
    }
  }

  return (
    <div className="row">
      <div className="col-sm-5">
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="form-outline w-50" controlId="formTokenId">
            <Form.Label>Token ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter token ID"
              value={form.tokenId}
              onChange={(e) => setField('tokenId', e.target.value)}
              isInvalid={!!formErrors.tokenId}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.tokenId}
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group className="form-outline w-50" controlId="formSerial">
            <Form.Label>Serial</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter serial number"
              value={form.serial}
              onChange={(e) => setField('serial', e.target.value)}
              isInvalid={!!formErrors.serial}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.serial}
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group className="form-outline w-50" controlId="formNetwork">
            <Form.Label>Network</Form.Label>
            <Form.Select
              aria-label="Select your network"
              defaultValue={form.network}
              onChange={(e) => setField('network', e.target.value)}
            >
              <option value="mainnet">Mainnet</option>
              <option value="testnet">Testnet</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group className="form-outline w-50" controlId="formNetwork">
            <Form.Label>HIP412 metadata standard version:</Form.Label>
            <Form.Select disabled={true} defaultValue={form.version}>
              <option value="1.0.0">V1.0.0</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Verify
          </Button>
        </Form>
      </div>
      <div className="col-sm">
        <ValidationResults validationErrors={validationErrors} />
      </div>
    </div>
  );
};

export default NFTFormValidation;