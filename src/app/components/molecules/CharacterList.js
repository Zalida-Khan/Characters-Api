import React from "react";
import CharacterCard from "../atoms/CharacterCard";

const CharacterList = ({ characters }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center p-4">
            {characters.map((character) => (
                <CharacterCard key={character._id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;