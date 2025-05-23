import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


const Contact = () => {
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="Full name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex gap-4" controlId="Gender">
        <div>
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" />
        </div>
        <div>
        <Form.Label>Nationality</Form.Label>
        <Form.Control type="text" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Date of Birth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Telephone No">
        <Form.Label>Telephone No</Form.Label>
        <Form.Control type="tel" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Occupation">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex gap-5" controlId="formBasicCheckbox">
      <Form.Label className='fs-5'>Marital Status:</Form.Label>
        <Form.Check type="checkbox" label="Married" />
        <Form.Check type="checkbox" label="Single" />
        <Form.Check type="checkbox" label="Widow" />
        <Form.Check type="checkbox" label="Widower" />
        <Form.Check type="checkbox" label="Divorce" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Contact