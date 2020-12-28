import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ShowMaat from './components/showMaat'
import Search from './components/search'

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

  const handleShowMaa = (maa) => {
    setSearch(maa.name)
  }

  const maatToShow = showAll
    ? maat
    : maat.filter(maa => maa.name.toLowerCase().match(newSearch.toLowerCase()))

  return (
    <div>
      <Search newSearch={newSearch} handleChange={handleChange} />
      <ShowMaat maatToShow={maatToShow} handleShowMaa={handleShowMaa}/>
    </div>
  );
}

export default App;
