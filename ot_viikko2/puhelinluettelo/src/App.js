import React, { useState, useEffect } from 'react'
import ShowNames from './components/ShowNames'
import NewPerson from './components/NewPerson'
import Filter from './components/Filter'
import personService from './services/persons'
import Notifications from './components/Notifications'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [ newFilter, setNewFilter ] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
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
        if (personObj.number === persons[i].number) {
          alert(`${personObj.name} is already added to phonebook`)
          setNewName('')
          setNewNumber('')
          return
        }
        const result = window.confirm(`${personObj.name} is already added to phonebook, replace the old number with a new one?`)

        if (result === true) {
          const personObj_number = {
            name: persons[i].name,
            number: newNumber
          }

          personService
          .update(persons[i].id, personObj_number)
          setNewName('')
          setNewNumber('')
          setMessage(
            `${persons[i].name} phone number changed to ${personObj_number.number}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          return 
        }
        else if (result === false) {
          setNewName('')
          setNewNumber('')
          return
        }
      }
    }

    personService
    .create(personObj)
    .then(returnedPerson => {
      console.log(returnedPerson)
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setMessage(
        `Added ${returnedPerson.name}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
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
      <h1>Phonebook</h1>
      <Notifications message={message} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <NewPerson addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ShowNames personsToShow={personsToShow} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App