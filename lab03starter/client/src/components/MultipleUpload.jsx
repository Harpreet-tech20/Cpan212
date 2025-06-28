import React, { useState } from "react";

export default function MultipleUpload() {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFiles(e.target.files);

  const handleUpload = async () => {
    const formData = new FormData();
    for (let file of files) {
      formData.append("images", file);
    }

    const res = await fetch("http://localhost:8000/uploadMultiple", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Upload Multiple Images</h2>
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}
