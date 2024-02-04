import { useEffect, useState } from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import Buscador from '../Buscador/Buscador'

const MiAPI = ({users, setUsers, dataFiltered}) => {
  const url = `https://randomuser.me/api/?results=10`
  const getAPI = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data.results)
  }

  useEffect(() => {
    getAPI()
  }, [])

  return (
    <>
      {dataFiltered.map((user, index) => {
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