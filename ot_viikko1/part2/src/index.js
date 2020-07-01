import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}


/*
const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Maya" age={36} />
    <Hello name={nimi} age={ika} />
  </div>
)
  }
ReactDOM.render(<App />, document.getElementById('root'))*/

const Display = ({ counter }) => <div>{counter}</div>


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
    </button> 
    )

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
  
  //const [ counter,setCounter ] = useState(0)
  
  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  const handleClick = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }
  //console.log('rendering...', counter)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
    <Display counter={counter}/>
    <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
  */
}

let counter = 1

  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root'))