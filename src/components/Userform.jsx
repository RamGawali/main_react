import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveUser } from "../services/UserServices";
import { useState } from "react";

export function Userform() {
    const[formData,setFormData]=useState({username:"",password:"",email:"",mobile:"",interest:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const result=await saveUser(formData);
            setFormData({username:"",password:"",email:"",mobile:"",interest:""})
            setIsSubmitted(true);
            setTimeout(()=>{
                setIsSubmitted(false);
            },1500)
            
        }catch(error){
            console.log(error);
        }
    }

    return (
        
        <Container  className="userform">
        <Row>
            <Col lg="6">
            </Col>
            <Col lg="5">
                <h1>Be a part of Kitabish family</h1>
            </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
            <Row >
                <Col lg="6" >
                </Col>
                <Col lg="4" mt="5" >
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={isSubmitted?formData.username:null} placeholder="username" name="username" onKeyUp={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={isSubmitted?formData.password:null} placeholder="password" name="password" onKeyUp={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={isSubmitted?formData.email:null} placeholder="email" name="email" onKeyUp={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="number" value={isSubmitted?formData.mobile:null} placeholder="number" name="mobile" onKeyUp={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Interest</Form.Label>
                        <Form.Control type="text" value={isSubmitted?formData.interest:null} placeholder="Tell you interest" name="interest" onKeyUp={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg="7">
                </Col>
                <Col lg="2">
                    <Button variant="primary" type="submit">Register</Button>
                </Col>
            </Row>
            <Row mt="2">
                <Col lg="6" mt="2">
                </Col>
                <Col lg="4">
                    {isSubmitted?<Alert variant="success">User Registered</Alert>:null}
                </Col>
            </Row>
        </Form>
        </Container>
    )
}