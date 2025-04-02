import React from "react";
import FetchButton from "../atoms/FetchButton";

const ButtonContainer = ({ onClick, isLoading }) => (
    <div className="flex justify-center items-center mt-10 ">
        <FetchButton onClick={onClick} isLoading={isLoading}/> 
    </div>
);

export default ButtonContainer;