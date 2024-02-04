import { Container, Row } from 'react-bootstrap'
import Feature from './Feature'

const MyFeatures = () => {
  return (
    <Container className='mt-5'>
        <Row>
          <Feature 
            title={'Administra Contactos'}
            desc={'Agregue, elimine y edite fácilmente sus contactos.'}
          />
          <Feature 
            title={'Organiza Grupos'}
            desc={'Agrupe sus contactos para facilitar acceso y gestión.'}
          />
          <Feature 
            title={'Sincroniza Dispositivos'}
            desc={'Accede a tus contactos desde cualquier lugar.'}
          />
        </Row>
      </Container>
  )
}

export default MyFeatures