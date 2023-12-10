import { Button, Card, Col, Container, Row } from "react-bootstrap";

export function Justcard(props) {
    console.log(props);
    return (
        <Col lg={3}>
            <Card className="myCard">
                <Card.Img variant="top" style={{height:"300px",backgroundColor:"pink"}} src={props.dcard.image} />
                <Card.Body>
                    <Card.Title>{props.dcard.name}</Card.Title>
                    <Card.Text>
                        {props.dcard.author}
                    </Card.Text>
                    <Card.Text>
                        {props.dcard.genre}
                    </Card.Text>
                    <Button variant="primary" >Rent</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}