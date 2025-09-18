import React from 'react';
import './App.css';
import logo from './assets/Gunpla_Logo.png';
import ImageGallery from "react-image-gallery";
import img1 from "./assets/IMG_6356.jpeg";
import img2 from "./assets/IMG_6359.jpeg";
import img3 from "./assets/IMG_6360.jpeg";
import img4 from './assets/IMG_6361.jpeg';
import img5 from './assets/IMG_6349.jpeg';
import img6 from './assets/IMG_6353.jpeg';
import img7 from './assets/IMG_6354.jpeg';
// Non-gundam
import img8 from './assets/IMG_6352.jpeg';
import img9 from './assets/IMG_6351.jpeg';
import img10 from './assets/IMG_6350.jpeg';
import img11 from './assets/IMG_6355.jpeg';
// GBWC
import img12 from './assets/GBWC/IMG_6356.jpeg';
import img13 from './assets/GBWC/P1410446.jpg';
import img14 from './assets/GBWC/P1411072.jpg';
import img15 from './assets/GBWC/P1411122.jpg';
import img16 from './assets/GBWC/P1411127.jpg';
import "react-image-gallery/styles/css/image-gallery.css";
function App() {
  const Gunpla_Images = [
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
  },
  {
    original: img5
  },
  {
    original: img6
  },
  {
    original: img7
  }
];
  const Non_Gundam = [
  {
    original: img8
  },
  {
    original: img9
  },
  {
    original: img10
  },
  {
    original: img11
  },
];
  const GBWC = [

  {
    original: img12
  },
  {
    original: img13
  },
  {
    original: img14
  },
  {
    original: img15
  },
  {
    original: img16
  },

];
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} alt="Gunpla logo" className='logo'/>
          <p>
            The Plastic Addiction You Never Knew You Needed
          </p>
      </header>
      <div className='App-body'>
        <div className='Row-container'>
          <ImageGallery
          items={Gunpla_Images}
          showThumbnails={false}
          showPlayButton={false}
          preventDefaultTouchmoveEvent={true}
          disableSwipe={true}
          />
          <ImageGallery
          items={GBWC}
          showThumbnails={false}
          showPlayButton={false}
          preventDefaultTouchmoveEvent={true}
          disableSwipe={true}
          /> 
          <ImageGallery
          items={Non_Gundam}
          showThumbnails={false}
          showPlayButton={false}
          preventDefaultTouchmoveEvent={true}
          disableSwipe={true}
          />
        </div>
        <div className='Row-container'>
          <h2>
            A Brief Overview of Gunpla
          </h2>
          <h2>
            Not Just a Hobby
          </h2>
          <h2>
            That's Not a Gundam!
          </h2>
        </div>
        <div className='Row-container'>
          <p>
            Gunpla is a brand of plastic model kits that has been around since the late 1970s! When it first started out, builders had to paint and glue their kits together by hand. As the years have gone by, however, Bandai has made the hobby far more accessible to just about anyone! The days of having to paint and glue are long gone, with the parts coming molded in color and using snap-fit technology. All the average person needs to start building a kit is a tool to cut the parts out of their plastic runners and a healthy amount of patience. Gunpla is typically separated by grade, with each grade denoting the scale of the finished product and general complexity of the kit. The most common of these grades are the High Grades, Real Grades, and Master Grades. In recent years, however, Bandai has begun producing an "Entry Grade" series designed to be completed in as little as 30 minutes without any tools at all!
          </p>
          <p>
            Even plastic model kits have a competitive scene, believe it or not! Many hobby shops hold small local tournaments with custom rulesets for builders to follow in their submissions. Beyond that, however, is the Gunpla Builders World Cup, an annual competition held by Bandai itself that allows builders from the world over to put their work on display and compete for the title of champion. The World Cup is even divided into different age categories so that builders of all ages can have a shot at the crown.
          </p>
          <p>
            Despite the name, Gunpla extends to other mecha franchises beyond Gundam. Bandai themselves have released a number of kits for mechs from other series under the Gunpla line, including Ultraman, Martian Successor Nadesico, Super Robot Wars, Neon Genesis Evangelion, Mazinger Z, Getter Robo, and even The King of Braves: GaoGaiGar! Bandai even has a model kit line dedicated to non-Gundam shows, called Shokugan Modeling Project! Beyond even that, however, are many other companies that have produced model kits very similar in design for various other Mecha series. Above, you'll find a Getter Robo kit from the popular "Moderoid" line of plastic models.
          </p>
        </div>
        <h2>Interested in trying Gunpla? Check out these links!</h2>
        <div className='Links'>
          <a target='blank' href='https://en.gundam.info/'>Gundam Info</a>
          <a target='blank' href='https://global.bandai-hobby.net/en-us/'>Bandai Hobby Site</a>
          </div>
      </div>
      
      <footer>
        <div style={{textAlign:"right",fontSize:"14px",color:"gray"}}><p>Page designed by Trevor Lamm&nbsp;</p></div>
      </footer>
    </div>
  );
}

export default App;
