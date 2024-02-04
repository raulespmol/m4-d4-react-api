import MyNavbar from './components/Landing/Navbar/MyNavbar'
import MyHero from './components/Landing/Hero/MyHero'
import MyFeatures from './components/Landing/Features/MyFeatures'
import { MiAPI } from './components/MiAPI/MiAPI'

import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

  return (
    <>
      <MyNavbar />
      <MyHero />
      <MyFeatures />
    </>
  )
}

export default App
