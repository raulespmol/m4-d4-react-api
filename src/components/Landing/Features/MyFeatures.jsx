import { Container, Row } from 'react-bootstrap'
import Feature from './Feature'

const MyFeatures = () => {
  return (
    <Container className='my-5 py-5'>
        <Row>
          <Feature 
            icon={'list-ul'}
            title={'Administra Contactos'}
            desc={'Agrega, elimina y edita fácilmente tus contactos.'}
            />
          <Feature 
            icon={'folder'}
            title={'Organiza Grupos'}
            desc={'Agrupa tus contactos para facilitar acceso y gestión.'}
            />
          <Feature 
            icon={'cloud'}
            title={'Sincroniza Dispositivos'}
            desc={'Accede a tus contactos desde cualquier lugar.'}
          />
        </Row>
      </Container>
  )
}

export default MyFeatures