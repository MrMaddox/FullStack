import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
  {text}
  </button>
)

const points = new Array(6).fill(0)

const Aanet = ({ selected, points, display_points }) => {
  
  return (
  <p>has {display_points} votes</p>
)}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const copy = [...points]
  const [display_points, setDisplayPoints] = useState(0)

  console.log(points)

  const handleNextAnecdote = () => {
    const num = Math.floor(Math.random() * 6);
    setSelected(num)
    setDisplayPoints(points[selected])
  }

  const handleVote = () => {
    points[selected] += 1
    copy[selected] += 1
    console.log(points[selected])
    setDisplayPoints(points[selected])
    }

  return (
    <div>
      <div>
        {props.anecdotes[selected]}
        <Aanet selected={selected} points={points} display_points={display_points} />
      </div>
      <Button onClick={handleVote} text='vote'/>
      <Button onClick={handleNextAnecdote} text='next anecdote'/>
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)