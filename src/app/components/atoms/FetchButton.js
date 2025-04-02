import React from "react";

const FetchButton = ({ onClick, state }) => {
    const getButtonText = () => {
        if (state === "loading") return "Loading...";
        if (state === "error") return "Retry";
        return "Fetch Characters";
    };

    return (
        <button 
        onClick={onClick} 
        disabled={state === "loading"} // disables button when loading
        aria-label={state === "loading" ? "Loading characters..." : "Fetch characters"}
        className={`px-4 py-2 font-semibold text-white rounded ${
            state === "loading" ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
        }`}
        > 
            {getButtonText()}
        </button>
    );
};

export default FetchButton;