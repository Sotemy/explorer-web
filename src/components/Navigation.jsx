import { Navbar, Container, Button } from "react-bootstrap"

export default function Navigation(){

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Navbar
                </Navbar.Brand>
                <Button variant="success">Login</Button>
            </Container>
        </Navbar>
    )
}