import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import ShowNames from './components/ShowNames'
import NewPerson from './components/NewPerson'
import Filter from './components/Filter'

const ShowNames = ( {personsToShow} ) => {
  return (
    <ul>
      {personsToShow.map((person) =>
      <Person key={person.name} person={person}/> 
      )}
      </ul>
  )
}

const Person = ({ person }) => {
  return (
  <li>{person.name} {person.number}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObj = {
      name: newName,
      number: newNumber
    }


    for (let i = 0; i < persons.length; i++) {
      if (personObj.name === persons[i].name) {
        alert(`${personObj.name} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        return
      }
    }

    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    if (event.target.value === "") setShowAll(true)

    setNewFilter(event.target.value)
    setShowAll(false)
  }


  const personsToShow = showAll
    ? persons 
    : persons.filter(person => person.name.toLowerCase().match(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <NewPerson addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ShowNames personsToShow={personsToShow} />
    </div>
  )
}

export default App