import { Container, Navbar, Nav, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">ContactList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Planes</Nav.Link>
            <Nav.Link href="#pricing">Acerca de</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Crear Cuenta</Nav.Link>
            <Button variant="primary" >Iniciar Sesion</Button>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default MyNavbar