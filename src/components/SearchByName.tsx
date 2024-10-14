import type React from 'react';
import { useState } from 'react';

interface SearchByNameProps {
  onSearch: (name: string) => void;
}

const SearchByName: React.FC<SearchByNameProps> = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onSearch(e.target.value);
  };
  
  return (
    <div className="search-by-name">
      <input
        type="text"
        placeholder="Pesquisar nome Digimon"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchByName;