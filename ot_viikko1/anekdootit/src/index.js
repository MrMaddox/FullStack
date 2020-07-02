import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
  {text}
  </button>
)

const Aanet = ({ selected, points}) => {
  
  return (
  <p>has {points[selected]} votes</p>
)}

const EnitenAania = ({ anecdotes, selected, points}) => {
  let suurin = 0
  let tmp = 0         //tallennetaan suurimman indeksi
  let i
  
  for (i = 0; i < points.length; i++) {
    if (points[i] > suurin) {
      suurin = points[i]
      tmp = i
    }
  }

  return (
    <div>
      <p>{anecdotes[tmp]}</p>
      <p>has {suurin} votes</p>
    </div>
  )}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [display_points, setDisplayPoints] = useState(0)
  

  const handleNextAnecdote = () => {
    const num = Math.floor(Math.random() * 6);
    setDisplayPoints(points[selected])
    setSelected(num)
  }
  
  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1

    points[selected] = copy[selected]
    setDisplayPoints(points[selected])
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <Aanet selected={selected} points={points}/>
      </div>
      <Button onClick={handleVote} text='vote'/>
      <Button onClick={handleNextAnecdote} text='next anecdote'/>
      <div>
        <h1>Anecdote with most votes</h1>
        <EnitenAania anecdotes={props.anecdotes} selected={selected} points={points}/>
      </div>
    </div>
    
  )
}

const points = new Array(6).fill(0)

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