import type { FC } from "react";
import type React from "react";

interface RandomDigimonProps {
  onClick: () => void;
}

const RandomDigimon: FC<RandomDigimonProps> = ({ onClick }) => {
  
  return (
    <div className="random-button">
      <button className="random-button" type="button" onClick={onClick}>
        Buscar Digimon Aleatório
      </button>
    </div>
  );
};

export default RandomDigimon;