import React, { useState } from 'react';

function Searchbar({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    filterTransactions(searchTerm);
  };

  return (
    <div>
      <input type='text' value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default Searchbar;
