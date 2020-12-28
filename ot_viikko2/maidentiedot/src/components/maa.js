import React from 'react';

const Maa = ({ maa, handleShowMaa}) => {
    return (
      <li>{maa.name} <button onClick={() => handleShowMaa(maa)}>show</button></li>
    )
  }

  export default Maa