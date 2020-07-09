import React from 'react';
import personService from '../services/persons'

const ShowNames = ( {personsToShow, setPersons, setMessage} ) => {
    return (
      <ul>
        {personsToShow.map((person) =>
        <Person key={person.name} person={person} setPersons={setPersons} personsToShow={personsToShow} setMessage={setMessage}/> 
        )}
        </ul>
    )
  }

  const Person = ({ person, setPersons, personsToShow, setMessage }) => {
    return (
    <li>{person.name} {person.number} <button onClick={() => deletePerson(person, setPersons, personsToShow, setMessage)}>delete</button></li>
    )
  }

  const deletePerson = (person, setPersons, personsToShow, setMessage) => {
    console.log(person)
    const result = window.confirm(`Delete ${person.name}?`)
    
    if (result === true) {
      console.log(`Poistetaan ${person.name}`)
      personService.deleteId(person.id)
      setPersons(personsToShow.filter(n => n.id !== person.id))
      setMessage(
        `Deleted ${person.name}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  export default ShowNames