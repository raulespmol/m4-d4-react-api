import { Col } from "react-bootstrap"

const Feature = ({icon, title, desc}) => {
  return (
    <Col>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Col>
  )
}

export default Feature