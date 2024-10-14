import type React from "react";
import { useEffect, useState } from "react";
import { getAllDigimons, getDigimonByLevel, getDigimonByName } from "../services/api";
import DigimonCard from "./DigimonCard";
import SearchBarDigimon from "./SearchBarDigimon";

interface Digimon {
	name: string;
	level: string;
	img: string;
}

const DigimonList: React.FC = () => {
  const [digimons, setDigimons] = useState<Digimon[]>([]);

  useEffect(() => {
    fetchAllDigimons();
  }, []);

  const fetchAllDigimons = async () => {
    try {
      const data = await getAllDigimons();
      setDigimons(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Erro ao buscar todos Digimons:", error);
    } 
  };

  const FirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSearchByName = async (name: string) => {
    try {
      const capitalized_name = FirstLetter(name);
      const data = await getDigimonByName(capitalized_name);
      setDigimons(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Erro ao buscar Digimons:', error);
    } 
  };


  const handleSearchByLevel = async (level: string) => {
    try {
      const data = await getDigimonByLevel(level);
      setDigimons(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Erro ao buscar Digimons:', error);
    } 
  };

  return (
    <div>
      <SearchBarDigimon onSearchByName={handleSearchByName} onSearchByLevel={handleSearchByLevel} />
      <div className="digimon-list">
        {digimons.map((digimon) => (
          <DigimonCard
            key={digimon.name}
            name={digimon.name}
            level={digimon.level}
            img={digimon.img}
          />
        ))}
      </div>
    </div>
  );
};

export default DigimonList;
