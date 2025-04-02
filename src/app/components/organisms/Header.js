import React from "react";
import FetchButton from "../atoms/FetchButton";

const Header = ({ onFetchImages, buttonState }) => (
    <section className="text-center mt-10 mb-4 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">Discover Disney Characters</h1>
        <p className="text-gray-700 mb-5">Explore more about Disney characters and their stories</p>
        <FetchButton onClick={onFetchImages} state={buttonState} />
    </section>
);

export default Header;