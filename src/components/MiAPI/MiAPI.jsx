import { useState, useEffect } from 'react'
import { Col, Card, Image } from 'react-bootstrap'

const MiAPI = ({setUsers, dataFiltered}) => {
  const [order, setOrder] = useState('A-Z')

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
    if(order === 'A-Z'){
      dataFiltered.sort((a,b) => {
        if(a.name.first < b.name.first) return 1
        if(a.name.first > b.name.first) return -1
        return 0
      })
    }
    if(order === 'Z-A'){
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
      <select onChange={handleOption}>
        <option value="A-Z">Nombre A-Z</option>
        <option value="Z-A">Nombre Z-A</option>
      </select>
      {dataFiltered
      .map((user, index) => {
        const {name, location, picture, cell, email} = user
        return (
          <Col xs={6} md={4} lg={3} className='g-4' key={index}>
            <Card body className='h-100'>
              <Image src={picture.large} roundedCircle className='mb-3 border shadow-sm' />
              <Card.Title>{name.first} {name.last}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{location.city}, {location.country}</Card.Subtitle>
              <hr />
              <Card.Text>{cell}</Card.Text>
              <Card.Text>{email}</Card.Text>
            </Card>
          </Col>
        )
      })}
    </>
  )
}

export default MiAPI