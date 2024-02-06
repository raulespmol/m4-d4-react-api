import { Container, Button } from "react-bootstrap"
import './style.css'

const MyHero = () => {
  return (
    <Container fluid className='bg-light hero text-light'>
      <h1 className="text-shadow">Bienvenido a ContactList</h1>
      <p>Administra, organiza y sincroniza tus contactos en todos tus dispositivos.</p>
      <div className="d-flex gap-2">
        <Button variant='primary'>Crear Cuenta</Button>
        <Button variant='secondary'>Iniciar Sesion</Button>
      </div>
    </Container>
  )
}

export default MyHero