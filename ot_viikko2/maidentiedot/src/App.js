import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ShowMaat = ({ maatToShow }) => {

  if (maatToShow.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
  if(maatToShow.length < 10 && maatToShow.length > 1) {
    console.log(typeof maatToShow)
    console.log('TÄSSÄ', maatToShow)
    return (
      <ul>
        {maatToShow.map(maa => 
          <Maa key={maa.alpha3Code} maa={maa} />
        )}
      </ul>
    )
  }
  if(maatToShow.length === 1) {
    const maa = maatToShow
    console.log(maa)
    return (
      <div>
        <ShowOneMaa maatToShow={maatToShow} />
      </div>
    )
  }
  return (
    <div>
      <p>Something went wrong!</p>
    </div>
  )
  
}

const ShowOneMaa = ({ maatToShow }) => {
  console.log(maatToShow)
  return (
    <div>
    {maatToShow.map(maa => 
      <div key={maa.alpha3Code}>
        <h1>{maa.name}</h1>
        <p>capital {maa.capital}</p>
        <p>population {maa.population}</p>
        <h2>languages</h2>
        {maa.languages.map(lang => 
          <li key={lang.name}>{lang.name}</li>
          )}
        <img src={maa.flag} width="100" height="80"></img>
      </div>
    )}
  </div>
  )
}

const Maa = ({ maa }) => {

  const jokuFunktio = () => {
    alert(maa.name)
    console.log(maa)

    return (
      <div>
        <ShowOneMaa maatToShow={maa} />
      </div>
    )
  }  

  return (
    <li>{maa.name} <button onClick={jokuFunktio}>show</button></li>
  )
}

const Search = ({ newSearch, handleChange }) => {
  return (
    <div>
      find countries: <input 
       value={newSearch} onChange={handleChange}
      />
    </div>
  )
}

const App = () => {
  const [maat, setMaat] = useState('')
  const [newSearch, setSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setMaat(response.data)
    })
  }, [])

  const handleChange = (event) => {

    setSearch(event.target.value)
    setShowAll(false)
  }

  const maatToShow = showAll
    ? maat
    : maat.filter(maa => maa.name.toLowerCase().match(newSearch.toLowerCase()))

  return (
    <div>
      <Search newSearch={newSearch} handleChange={handleChange} />
      <ShowMaat maatToShow={maatToShow} />
    </div>
  );
}

export default App;
