import type React from "react";

interface DigimonCardProps {
	name: string;
	level: string;
	img: string;
}

const DigimonCard: React.FC<DigimonCardProps> = ({ name, level, img }) => {
	return (
		<div className="digimon-card">
			<h3>{name}</h3>
			<p>{level}</p>
			<img src={img} alt={name} />
		</div>
	);
};

export default DigimonCard;
