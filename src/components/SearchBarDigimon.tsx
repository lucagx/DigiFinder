import type React from 'react';
import { useState } from 'react';
import SearchByName from './SearchByName';
import SelectLevel from './SelectLevel';

interface SearchBarDigimonProps {
  onSearchByName: (name: string) => void;
  onSearchByLevel: (level: string) => void;
}

const SearchBarDigimon: React.FC<SearchBarDigimonProps> = ({ onSearchByName, onSearchByLevel }) => {
  const [name, setName] = useState('');

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleLevelChange = (level: string) => {
    onSearchByLevel(level);
  };

  const handleSearchByName = () => {
    onSearchByName(name);
  };

  return (
    <div className="search-digimon">
      <SearchByName onSearch={handleNameChange} />
      <button type="button" onClick={handleSearchByName}>
        Pesquisar
      </button>
      <SelectLevel onSelect={handleLevelChange} />
    </div>
  );
};

export default SearchBarDigimon;