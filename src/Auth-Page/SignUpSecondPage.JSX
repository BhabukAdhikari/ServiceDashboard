import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './auth.css'



const SignUpPage = () => {
  return (
    <div>
      <h1 className='sign-title'>Register</h1>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName" style={{marginLeft: "10%", marginTop: "30px"}}>
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter company name" style={{width: "90%"}} />
        <Form.Text className="text-muted">
         Enter your Company name
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoneNumb"style={{marginLeft: "10%"}}>
        <Form.Label>Phone/office number</Form.Label>
        <Form.Control type="number" placeholder="number" style={{width: "90%"}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"style={{marginLeft: "10%"}}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Email" style={{width: "90%"}} />
      </Form.Group>
      
  


      <Form.Group className="mb-3" controlId="formBasicRegistrationNumber"style={{marginLeft: "10%"}}>
        <Form.Label>Registration number</Form.Label>
        <Form.Control type="number" placeholder="number" style={{width: "90%"}} />
      </Form.Group>
      
      <Button type="Next" style={{marginLeft: "83%", backgroundColor: "#39ac92" , border: "#39ac92"}}>
        Next
      </Button>
    </Form>

    </div>
  )
}

export default SignUpPage