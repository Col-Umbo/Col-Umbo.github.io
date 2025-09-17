import React from 'react';
import './App.css';
import logo from './assets/Gunpla_Logo.png';
import ImageGallery from "react-image-gallery";
import img1 from "./assets/IMG_6356.jpeg";
import img2 from "./assets/IMG_6359.jpeg";
import img3 from "./assets/IMG_6360.jpeg";
import img4 from './assets/IMG_6361.jpeg';
import "react-image-gallery/styles/css/image-gallery.css";
function App() {
  const images = [
  {
    original: img1
  },
  {
    original: img2
  },
  {
    original: img3
  },
  {
    original: img4
  }
];
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} alt="Gunpla logo" className='logo'/>
          <p>
            Subheader regarding model kits
          </p>
      </header>
      <div className='App-body'>
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false} autoPlay={true}/>
      </div>
    </div>
  );
}

export default App;
