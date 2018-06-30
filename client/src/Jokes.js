import React from 'react'

const Jokes = ({ jokes }) => {
  return jokes.map((joke, i) =>
    <div key={`${joke.id}-${i}`}>
      <p>{joke.type}</p>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  )
}

export default Jokes