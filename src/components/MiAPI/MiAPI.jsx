import { useState, useEffect } from 'react'
import { Col, Card, Image } from 'react-bootstrap'

const MiAPI = ({setUsers, dataFiltered}) => {
  const [order, setOrder] = useState('ASC')
  const [sorting, setSorting] = useState([...dataFiltered])

  const url = `https://randomuser.me/api/?results=36`
  const getAPI = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data.results)
    
  }

  useEffect(() => {
    getAPI()
  }, [])

  const sorted = () => {
    if(order === 'ASC'){
      const sortedData = [...dataFiltered].sort((a,b) => {
        if(a.name.first > b.name.first) {
          return 1
        }
        if(a.name.first < b.name.first) {
          return -1
        }
        return 0
      })
      setSorting(sortedData)
    }
  }

  return (
    <>
      {sorting.map((user, index) => {
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