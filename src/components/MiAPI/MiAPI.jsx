import { useState, useEffect } from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import 'boxicons'

const MiAPI = ({setUsers, dataFiltered}) => {
  const [order, setOrder] = useState('AZ')

  const url = `https://randomuser.me/api/?results=36`
  const getAPI = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data.results)
  }

  useEffect(() => {
    getAPI()
  }, [])

  const sortContacts = () => {
    if(order === 'AZ'){
      dataFiltered.sort((a,b) => {
        if(a.name.first < b.name.first) return 1
        if(a.name.first > b.name.first) return -1
        return 0
      })
    }
    if(order === 'ZA'){
      dataFiltered.sort((a,b) => {
        if(a.name.first > b.name.first) return 1
        if(a.name.first < b.name.first) return -1
        return 0
      })
    }
  }

  const handleOption = (e) => {
    setOrder(e.target.value)
    sortContacts()
  }


  return (
    <>
      <div className='d-flex gap-3'>
        <label htmlFor="order">Ordenar por:</label>
        <select id='order' onChange={handleOption}>
          <option value="AZ">Nombre A-Z</option>
          <option value="ZA">Nombre Z-A</option>
        </select>
      </div>
      {dataFiltered.length ? (
        dataFiltered
        .map((user, index) => {
          const {name, location, picture, cell, email} = user
          return (
            <Col xs={6} md={4} lg={3} className='g-4' key={index}>
              <Card body className='h-100'>
                <Image src={picture.large} roundedCircle className='mb-3 border shadow-sm' />
                <Card.Title>{name.first} {name.last}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center align-items-center">
                  <box-icon type='solid' name='map'></box-icon>{location.city}, {location.country}
                </Card.Subtitle>
                <hr />
                <Card.Text className='d-flex justify-content-center align-items-center'>
                  <box-icon name='phone' type='solid'></box-icon> {cell}
                </Card.Text>
                <Card.Text className='d-flex justify-content-center align-items-center'>
                  <box-icon name='envelope'></box-icon> {email}
                </Card.Text>
              </Card>
            </Col>
          )
        })
      ) : (
        <h3 className='mt-5'>No se encontró ningún contacto</h3>
      )}
    </>
  )
}

export default MiAPI