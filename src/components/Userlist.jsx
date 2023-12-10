import { useEffect, useState } from "react";
import { Button, Container, Modal, NavItem, Table } from "react-bootstrap";
import { deleteUser, fetchUser } from "../services/UserServices";
import {useHistory, useNavigate} from "react-router-dom";

export function Userlist() {

    const [users, setUsers] = useState([])
    const [showDialog, setShowDialog] = useState(false);
    const [selecteduser,setSelectedUser]=useState("")
    const navigate=useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }

    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populateUserState() {
        try {
            const data = await fetchUser();
            setUsers(data.user);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateUserState();
    }, [])

    const handleDeleteClick = async () => {
        try {
            await deleteUser(selecteduser);
            populateUserState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <h1>List of the users login</h1>
            <Table className="mt-5">
                <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>PASSWORD</th>
                        <th>EMAIL</th>
                        <th>MOBILE</th>
                        <th>INTEREST</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u) => {
                            return (

                                <tr>
                                    <td>{u.username}</td>
                                    <td>{u.password}</td>
                                    <td>{u.email}</td>
                                    <td>{u.mobile}</td>
                                    <td>{u.interest}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedUser(u.username);
                                        }}>Delete</Button>
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit/${u.username}`);
                                        }}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete {selecteduser} user</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleDeleteClick}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}