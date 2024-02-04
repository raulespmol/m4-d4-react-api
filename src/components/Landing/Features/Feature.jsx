import { Col } from "react-bootstrap"
import 'boxicons'

const Feature = ({icon, title, desc}) => {
  return (
    <Col>
      <box-icon name={icon} size='lg'></box-icon>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Col>
  )
}

export default Feature