import { Col, Container, Row } from "react-bootstrap";
import { Slidebar } from "./Slidebar";
import { BookCard } from "./BookCard";

 
export function Dashboard(){
    return(
        <Container className="home">
        {/* <Row>
            <Col log="6">
                <h1>Welcome to Mumbai</h1>
            </Col>
            <Col log="6">
                <h1>Welcome to chennai</h1>
            </Col>
        </Row> */}
        <Row >
            <Col>
                <Slidebar></Slidebar>
            </Col>
        </Row>
        <h1>Most Popular Books</h1>
        <BookCard></BookCard>
        </Container>
       
    )
}