"use client";

import { useState } from "react";
import Header from "./components/organisms/Header";
import ImageListContainer from "./components/molecules/ImageListContainer";

const Home = () => {
  const [buttonState, setButtonState] = useState("idle");
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);  // Track the current page

  const fetchImages = async () => {
    setButtonState("loading");
    setError(null);

    try {
      const response = await fetch(`https://api.disneyapi.dev/character?page=${page}&pageSize=5`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();

      // Replace the old images with new ones
      setImageData(result.data);

      setButtonState("idle");

      // Increment the page for the next request
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError(err.message);
      setButtonState("error");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header onFetchImages={fetchImages} buttonState={buttonState} />
      <main>
        <ImageListContainer 
          loading={buttonState === "loading"} 
          error={error} 
          imageData={imageData} 
        />
      </main>
    </div>
  );
};

export default Home;