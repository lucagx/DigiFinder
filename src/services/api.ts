import axios from "axios";

const API_URL = "https://digimon-api-phi.vercel.app/api/digimons";

export const getAllDigimons = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error("Error ao buscar todos Digimons:", error);
		throw error;
	}
};

export const getDigimonByName = async (name: string) => {
	try {
		const response = await axios.get(`${API_URL}/name/${name}`);
		return response.data;
	} catch (error) {
		console.error(`Error ao buscar Digimon: ${name}`, error);
		throw error;
	}
};

export const getDigimonByLevel = async (level: string) => {
	try {
		const response = await axios.get(`${API_URL}/level/${level}`);
		return response.data;
	} catch (error) {
		console.error(`Error ao buscar level Digimon: ${level}`, error);
		throw error;
	}
};

export const getRandomDigimon = async () => {
	try {
		const response = await axios.get(API_URL);
		const data = await response.data;

		const randomIndex = Math.floor(Math.random() * data.length);
		return data[randomIndex];
	} catch (error) {
		console.error("Erro ao buscar Digimon:", error);
	}
};
