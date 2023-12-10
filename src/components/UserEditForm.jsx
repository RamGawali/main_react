import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { fetchUserByUsername, saveUser, updateUser } from "../services/UserServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UserEditForm() {
    const params=useParams();
    const[formData,setFormData]=useState({username:"",password:"",email:"",mobile:"",interest:""});
    const [isSubmitted,setIsSubmitted]=useState(false);
    const[user,setUser]=useState({})

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const result=await updateUser(params.username,formData);
            console.log(result);
            setFormData({username:"",password:"",email:"",mobile:"",interest:""})
            setIsSubmitted(true);
            setTimeout(()=>{
                setIsSubmitted(false);
            },1500)
        }catch(error){
            console.log(error);
        }
    }

    const populateUserState=async()=>{
        try{
            const result= await fetchUserByUsername(params.username);
            
            // console.log(result.User);
            setFormData(result.User);
            
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        populateUserState();
    },[])

    return (
        
        <Container  className="userform">
        <Row>
            <Col lg="6">
            </Col>
            <Col lg="5">
                <h1>Update your details here..</h1>
            </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
            <Row >
                <Col lg="6" >
                </Col>
                <Col lg="4" mt="5" >
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={formData.username} placeholder="username" name="username" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={formData.password} placeholder="password" name="password" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={formData.email} placeholder="email" name="email" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="number"  value={formData.mobile} placeholder="number" name="mobile" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg="6">
                </Col>
                <Col lg="4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Interest</Form.Label>
                        <Form.Control type="text"  value={formData.interest} placeholder="Tell you interest" name="interest" onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg="7">
                </Col>
                <Col lg="2">
                    <Button variant="primary" type="submit">Update</Button>
                </Col>
            </Row>
            <Row mt="2">
                <Col lg="6" mt="2">
                </Col>
                <Col lg="4">
                    {isSubmitted?<Alert variant="success">Values Updated</Alert>:null}
                </Col>
            </Row>
        </Form>
        </Container>
    )
}