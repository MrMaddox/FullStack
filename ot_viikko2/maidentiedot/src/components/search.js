import React from 'react';

const Search = ({ newSearch, handleChange }) => {
    return (
      <div>
        find countries: <input 
         value={newSearch} onChange={handleChange}
        />
      </div>
    )
  }

export default Search