import React, { useState } from "react";

export default function DogImageUpload() {
  const [dogImage, setDogImage] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const getDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setDogImage(data.message);
  };

  const uploadDog = async () => {
    const res = await fetch("http://localhost:8000/uploadDogImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: dogImage }),
    });

    const data = await res.json();
    setUploadMessage(data.message);
  };

  return (
    <div>
      <h2>Dog Image Upload</h2>
      <button onClick={getDog}>Get Dog</button>
      {dogImage && (
        <>
          <img src={dogImage} style={{ width: 200, marginTop: 10 }} />
          <br />
          <button onClick={uploadDog}>Upload Dog</button>
          <p>{uploadMessage}</p>
        </>
      )}
    </div>
  );
}
