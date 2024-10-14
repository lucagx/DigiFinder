import type React from 'react';

interface SelectLevelProps {
  onSelect: (level: string) => void;
}

const SelectLevel: React.FC<SelectLevelProps> = ({ onSelect }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <div className="select-level">
      <select onChange={handleSelect}>
        <option value="">Selecione o Nível</option>
        <option value="Fresh">Fresh</option>
        <option value="In%20Training">In-Training</option>
        <option value="Rookie">Rookie</option>
        <option value="Champion">Champion</option>
        <option value="Ultimate">Ultimate</option>
        <option value="Armor">Armor</option>
        <option value="Mega">Mega</option>
      </select>
    </div>
  );
};

export default SelectLevel;