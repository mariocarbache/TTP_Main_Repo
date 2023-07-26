import axios from "axios";
import React, {useEffect} from "react";

const [characters, setCharacters] = useState([]);

function StarWarsCharacters(){
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get("http://swapi.dev/api/people/");
                setCharacters(response.data.results);
            } catch (error) {
                console.error("Error fetching data", error);
            } 
        };

        fetchCharacters();

    }, []);

    return (
    <div>
        <h1>Star Wars Characters</h1>
        <ul>
            {characters.map((character) => (
            <li key={character.name}>
                <h2>{character.name}</h2>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height}</p>
                <p>Homeworld: {character.homeworld}</p>
                <p>Species: {character.species[0]}</p>
            </li>
            ))}
        </ul>
    </div>
);
}

export default StarWarsCharacters;

