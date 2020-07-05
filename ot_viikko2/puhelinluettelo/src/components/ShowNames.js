import React from 'react';

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

  export default ShowNames