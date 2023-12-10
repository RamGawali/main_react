import { useEffect, useState } from "react"
import { fetchBooks } from "../services/UserServices";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Justcard } from "./Justcard";


export function BookCard() {
    const [datacard, setDataCard] = useState([]);

    async function populateDataCardState() {
        try {
            const data = await fetchBooks();
            setDataCard(data.book);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateDataCardState();
    }, [])

    return (
        <Container>
            <Row>
                {
                    datacard.map((dcard) => {
                        return (
                           <Justcard dcard={dcard}/>
                        );
                    })
                }
            </Row>
        </Container>
    );
}
{/* <Justcard data={dcard}></Justcard> */ }