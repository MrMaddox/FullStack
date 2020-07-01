import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
  {text}
  </button>
)

const AVG = ({ text, good, bad, all }) => {
  if (all.all === 0) {
  return (
    <tr>
      <td>{text}</td>
      <td>{0}</td>
    </tr>
  )}

  const huonot = bad.bad - (bad.bad * 2)
  const avg_tulos = (good.good + huonot) / all.all

return (
  <tr>
      <td>{text}</td>
      <td>{avg_tulos}</td>
  </tr>
)}

const POS = ({ text, good, all }) => {
  if (all.all === 0) {
    return (
      <tr>
        <td>{text}</td> 
        <td>{0}</td>
        <td>%</td>
      </tr>
    )}

  const pos_tulos = (good.good / all.all) * 100
  return (
  <tr>
    <td>{text}</td>
    <td>{pos_tulos}</td>
    <td>%</td>
  </tr>
  )}

const StatisticLine = ({ text, value }) => {

if (text === 'average') {
  return (
      <AVG text={text} good={value.good} bad={value.bad} all={value.all}/>
  )
}

if (text === 'positive') {
  return (
      <POS text={text} good={value.good} all={value.all}/>
  )
}

return (
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>
)
}

const Statistics = ({ good, neutral, bad, all }) => {
  const obj = {
    good: {good},
    neutral: {neutral},
    bad: {bad},
    all: {all}
  }
  if (all === 0) {
    return (
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    )}

  return (
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={obj} />
      <StatisticLine text="positive" value={obj} />
    </tbody>
    )
  }

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  
  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <h1>statistics</h1>
      </div>
      <table>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </table>
    </>
  )}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
