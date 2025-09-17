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
        <h2>
          Lorem ipsum dolor sit amet.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi repudiandae quidem eius animi ab sequi debitis reprehenderit culpa quam sunt consectetur voluptate quibusdam corrupti perspiciatis tempora nobis pariatur, mollitia quae, explicabo consequatur temporibus? Incidunt asperiores hic iure expedita odio natus facilis libero, provident fuga dolores deserunt voluptate doloremque voluptates reiciendis ut, dolorem optio beatae facere id quaerat dicta perferendis! Laborum sunt hic aspernatur quos suscipit deleniti sapiente debitis quam atque voluptatem incidunt explicabo tempore cupiditate ut autem temporibus, iure maxime, tenetur possimus repellat? Accusamus recusandae iusto laborum est quas explicabo. Veritatis labore incidunt necessitatibus odio cumque eligendi, atque iure quis voluptatem adipisci amet blanditiis. Recusandae, amet accusantium. Explicabo molestias porro deserunt, eos aperiam modi ex repudiandae totam tempora vitae saepe odit beatae earum quo corrupti esse unde iste! Suscipit itaque ullam maxime eum unde maiores molestias fugiat commodi corporis? Sunt magnam aliquam qui! Reprehenderit quibusdam doloribus repellat suscipit magnam, dolor odit dicta impedit facilis molestiae quas mollitia culpa animi, modi iste quaerat quasi sequi, nemo cumque inventore et debitis alias numquam. Veniam totam rem sed dolor saepe assumenda dolorum, laborum error fugit, nam modi incidunt ab accusantium eos ipsum, consequatur nihil fugiat unde animi cumque molestias tenetur. Rem ad dolorem, ut qui recusandae veniam architecto quis nesciunt laudantium aperiam, saepe possimus, aut corrupti eaque alias soluta ex quo! Dolor quo, velit, laboriosam labore sunt, neque enim iure distinctio at architecto consequatur adipisci quam? Maxime ad aspernatur corrupti doloremque exercitationem dolores minima minus similique quidem nesciunt! Porro suscipit aperiam eveniet, perspiciatis nobis quas voluptatem. Harum magnam sit temporibus dicta, consequuntur error possimus inventore dolor maiores accusamus, numquam animi! Veritatis iste sapiente laborum. Aspernatur sequi voluptatibus amet autem expedita distinctio iure, qui neque dolore facilis ullam aperiam fugiat incidunt dolor quaerat nesciunt laborum, pariatur accusamus corporis voluptate dolores error. Veritatis atque laboriosam temporibus quaerat consequuntur dignissimos nulla deleniti quos, quod, nostrum rerum soluta iusto eligendi nisi officiis exercitationem id, omnis totam perspiciatis quia commodi mollitia quisquam provident earum. Dolorem possimus culpa hic libero mollitia ullam eos nostrum consequuntur voluptate distinctio inventore nulla, tempora delectus, eaque sed quisquam est, error veritatis impedit commodi. Magni, explicabo fugit esse accusamus error libero sint debitis voluptatem ex dolorem deserunt, nam fuga? Praesentium repellat eum minima, magnam delectus vel optio, laboriosam enim totam molestiae fugit quae corrupti error harum ex cumque deserunt facilis illo. Id at vero deleniti magnam repellendus illo itaque cupiditate excepturi natus exercitationem?
        </p>
      </div>
    </div>
  );
}

export default App;
