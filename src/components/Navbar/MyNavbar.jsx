import { Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

export const MyNavbar = () => {
  return (
    <Navbar data-bs-theme="dark">
      <Navbar.Brand href="#home">Contactos</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">Opciones</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Opciones</Nav.Link>
        <Nav.Link href="#memes">*FOTO*</Nav.Link>
      </Nav>
    </Navbar>
  )
}
