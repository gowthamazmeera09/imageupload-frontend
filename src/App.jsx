import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', file);  // Use 'image' key as per multer

    axios.post("http://localhost:3000/up/upload", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };
  useEffect(()=>{
    axios.get("http://localhost:3000/up/getimage")
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })
 

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
