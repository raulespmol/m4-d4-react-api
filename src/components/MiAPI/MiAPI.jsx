import React, { useEffect, useState } from 'react'

export const MiAPI = () => {
  const [users, setUsers] = useState([])

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
      <div>
        {users.map(user => {
          const {name, location, picture, cell} = user
          return (
            <div>
              <h3>{name.first} {name.last}</h3>
              <img src={picture.medium} alt={name.first} />
              <p>{cell}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}