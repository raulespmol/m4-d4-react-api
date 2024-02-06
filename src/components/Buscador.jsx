import { Form } from "react-bootstrap"

const Buscador = ({filter, onChange}) => {

  return (
    <Form.Control className='mb-3'
      placeholder="Buscar contacto..."
      type="text" 
      name="search"
      autoComplete="false"
      value={filter}
      onChange={onChange}
    />
  )
}

export default Buscador