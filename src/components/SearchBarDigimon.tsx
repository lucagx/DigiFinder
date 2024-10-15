import type React from 'react';
import { useState } from 'react';
import SearchByName from './SearchByName';
import SelectLevel from './SelectLevel';
import RandomDigimon from './RandomDigimon';

interface SearchBarDigimonProps {
  onSearchByName: (name: string) => void;
  onSearchByLevel: (level: string) => void;
  onRandomDigimon: () => void;
}

const SearchBarDigimon: React.FC<SearchBarDigimonProps> = ({ onSearchByName, onSearchByLevel, onRandomDigimon }) => {
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

  const handleRandomDigimon = () => {
    onRandomDigimon();
  }

  return (
    <div className="search-digimon">
      <SearchByName onSearch={handleNameChange} />
      <button type="button" onClick={handleSearchByName}>
        Pesquisar
      </button>
      <SelectLevel onSelect={handleLevelChange} />
      <RandomDigimon onClick={handleRandomDigimon} />
    </div>
  );
};

export default SearchBarDigimon;