import { Container, Button } from "react-bootstrap"

const MyHero = () => {
  return (
    <Container fluid className='bg-light hero'>
      <h1>Bienvenido a ContactList</h1>
      <p>Administra, organiza y sincroniza tus contactos en todos tus dispositivos.</p>
      <div className="d-flex gap-2">
        <Button variant='dark'>Crear Cuenta</Button>
        <Button variant='outline-dark'>Iniciar Sesion</Button>
      </div>
    </Container>
  )
}

export default MyHero