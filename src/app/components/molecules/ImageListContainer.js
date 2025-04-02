import React from "react";
import CharacterList from "./CharacterList";

const ImageListContainer = ({ loading, error, imageData }) => {
    if (loading) return <div className="text-center mt-10 text-gray-300">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div
                className={`p-6 border-2 border-gray-300 rounded-lg w-full ${
                    imageData && imageData.length > 0 ? "max-w-9xl" : "max-w-xl"
                }`}
            >
                {imageData && imageData.length === 0 ? (
                    <div className="mt-10 text-center text-gray-400">
                        No content to display. Your content will display here.
                    </div>
                ) : (
                    <CharacterList characters={imageData} />
                )}
            </div>
        </div>
    );
};

export default ImageListContainer;