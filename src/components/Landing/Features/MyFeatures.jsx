import { Container, Row } from 'react-bootstrap'
import Feature from './Feature'

const MyFeatures = () => {
  return (
    <Container className='my-5'>
        <Row>
          <Feature 
            icon={'list-ul'}
            title={'Administra Contactos'}
            desc={'Agregue, elimine y edite fácilmente sus contactos.'}
            />
          <Feature 
            icon={'folder'}
            title={'Organiza Grupos'}
            desc={'Agrupe sus contactos para facilitar acceso y gestión.'}
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