import { useState } from 'react'

import { MyNavbar } from './components/Navbar/MyNavbar'

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

  return (
    <>
      <MyNavbar />
      <Container className='main'>
        hola
      </Container>
    </>
  )
}

export default App
