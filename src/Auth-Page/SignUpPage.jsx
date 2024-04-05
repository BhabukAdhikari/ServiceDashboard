import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './auth.css'



const SignUpPage = () => {
  return (
    <div>
      <h1 className='sign-title'>Register</h1>
          <Form style={{width: "100%"}}>
          <Form.Group className="mb-3" controlId="formBasicName" style={{marginLeft: "10%", marginTop: "30px"}}>
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter company name" style={{width: "25%" }} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoneNumb"style={{marginLeft: "40%" , marginTop: "-87px"}}>
        <Form.Label>Phone/office number</Form.Label>
        <Form.Control type="number" placeholder="number" style={{width: "40%"}} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"style={{marginLeft: "70%" , marginTop: "-87px"}}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Email" style={{width: "90%"}} required />
      </Form.Group>
      
  


      <Form.Group className="mb-3" controlId="formBasicRegistrationNumber"style={{marginLeft: "10%" , marginTop: "40px"}}>
        <Form.Label>Registration number</Form.Label>
        <Form.Control type="number" placeholder="number" style={{width: "25%"}} required  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPanNumber"style={{marginLeft: "40%" , marginTop: "-88px"}}>
        <Form.Label>Pan number</Form.Label>
        <Form.Control type="number" placeholder="number" style={{width: "40%"}} required />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3"style={{marginLeft: "70%" , marginTop: "-88px"}}>
        <Form.Label>Pan Certificate</Form.Label>
        <Form.Control type="file" multiple style={{width: "85%"}} required  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicDate"style={{marginLeft: "10%" , marginTop: '40px' }}>
        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" placeholder="Date" style={{width: "25%" }} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiAddress"style={{marginLeft: "40%" , marginTop: '-88px' }}>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" style={{width: "40%" }}required  />
      </Form.Group>

      <Form.Select aria-label="Default select example" style={{marginLeft: "70%" , marginTop: '-58px' , width: "25%" }} required >
      <option>Company Category</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <Form.Select aria-label="Default select example" style={{marginLeft: "10%" , marginTop: '60px' , width: "23%" }} required >
      <option>Service Category</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <Form.Group controlId="formFileMultiple" className="mb-3"style={{marginLeft: "40%" , marginTop: "-74px"}}>
        <Form.Label>Company Document verification</Form.Label>
        <Form.Control type="file" multiple style={{width: "45%"}} required  />
      </Form.Group>

      
      <Button type="submit" style={{marginLeft: "83%", backgroundColor: "#39ac92" , border: "#39ac92"}}>
        Create
      </Button>
    </Form>

    </div>
  )
}

export default SignUpPage