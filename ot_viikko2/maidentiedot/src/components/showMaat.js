import React from 'react';
import ShowOneMaa from './showOneMaa'
import Maa from './maa'

const ShowMaat = ({ maatToShow, handleShowMaa }) => {

    if (maatToShow.length > 10) {
      return (
        <p>Too many matches, specify another filter</p>
      )
    }
    if(maatToShow.length < 10 && maatToShow.length > 1) {
      return (
        <ul>
          {maatToShow.map(maa => 
            <Maa key={maa.alpha3Code} maa={maa} handleShowMaa={handleShowMaa}/>
          )}
        </ul>
      )
    }
    if(maatToShow.length === 1) {
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

  export default ShowMaat