import { useState } from 'react'

import MyNavbar from './components/Landing/Navbar/MyNavbar'
import MyHero from './components/Landing/Hero/MyHero'
import MyFeatures from './components/Landing/Features/MyFeatures'
import MiAPI from './components/MiAPI/MiAPI'
import Buscador from './components/Buscador/Buscador'

import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    setSearch(e.target.value)  
  }

  const dataFiltered = users.filter((user) => {
    const searchFilter = search.toLowerCase()
    return (
      user.name.first.toLowerCase().includes(searchFilter)
      );
    })

  return (
    <>
      <MyNavbar />
      <MyHero />
      <MyFeatures />

      <Container fluid className='bg-light py-5 api'>
        <h2>Simula la App</h2>
        <Container>
          <Row>
            <Col sm={12}>
              <Buscador filter={search} onChange={handleSearch} />
            </Col>
          </Row>
          <Row>
            <MiAPI users={users} setUsers={setUsers} dataFiltered={dataFiltered}/>
          </Row>
        </Container>
      </Container>

    </>
  )
}

export default App
