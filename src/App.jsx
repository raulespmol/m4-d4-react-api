import { useState } from 'react'

import MyNavbar from './components/Landing/MyNavbar'
import MyHero from './components/Landing/Hero/MyHero'
import MyFeatures from './components/Landing/Features/MyFeatures'
import MyFooter from './components/Landing/MyFooter'
import MiAPI from './components/MiAPI'
import Buscador from './components/Buscador'

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
      user.name.first.toLowerCase().includes(searchFilter) ||
      user.name.last.toLowerCase().includes(searchFilter)
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
            <MiAPI setUsers={setUsers} dataFiltered={dataFiltered}/>
          </Row>
        </Container>
      </Container>

      <MyFooter />
    </>
  )
}

export default App
