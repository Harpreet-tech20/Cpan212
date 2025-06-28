import React, { useState } from "react";

export default function RandomImages() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await fetch("http://localhost:8000/getRandomImages");
    const data = await res.json();
    setImages(data);
  };

  return (
    <div>
      <h2>Random Images from Server</h2>
      <button onClick={fetchImages}>Get Images</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: 10 }}>
        {images.map((url, i) => (
          <img key={i} src={url} alt="Random" style={{ width: 150 }} />
        ))}
      </div>
    </div>
  );
}
