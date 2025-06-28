import React from "react";
import MultipleUpload from "./components/MultipleUpload";
import RandomImages from "./components/RandomImages";
import DogImageUpload from "./components/DogImageUpload";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>CPAN 212 - Lab 3</h1>
      <MultipleUpload />
      <hr />
      <RandomImages />
      <hr />
      <DogImageUpload />
    </div>
  );
}

export default App;
