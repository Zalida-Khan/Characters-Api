import React from "react";

const CharacterCard = ({ character }) => (
    <article className="w-full sm:w-60 md:w-48 lg:w-56 xl:w-64 mt-6 mx-auto flex flex-col items-center text-center">
        <img className="w-full h-48 object-cover rounded-md" src={character.imageUrl} alt={character.name} />
        <h2 className="mt-3 font-bold text-pink-400 text-lg">{character.name}</h2>
        <p className="text-sm"><span className="font-bold text-pink-400">Appears in: </span>{(character.films && character.films.length) ? character.films.join(", ") : "No films but might be in a TV show"}</p>
        <a className="text-blue-300 no-underline hover:underline mt-2" href={character.sourceUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
    </article>
);

export default CharacterCard;