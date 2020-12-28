import React from 'react';

const ShowOneMaa = ({ maatToShow }) => {
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
          <img src={maa.flag} alt={''} width="100" height="80"></img>
        </div>
      )}
    </div>
    )
  }

  export default ShowOneMaa