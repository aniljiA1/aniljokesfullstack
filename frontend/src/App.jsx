import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import axios from "axios"
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <div>
        <h1>Full stack Developer</h1>
        <p>JOKES: {jokes.length}</p>
        {
          jokes.map((joke) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default App
