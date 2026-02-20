import ImageCarousel from './components/ImageCarousel';
import "./App.css";

const images = [
  'https://upload.wikimedia.org/wikipedia/en/7/79/Nightime_feature.jpg?20070318212746',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/869.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1021.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1017.png'
];

const imagestwo = [

];
function App() {
  return (
    <div className="App">
      <h1>Week 5 Feature - Image Carousel</h1>
      <ImageCarousel images={images} />
      <h1>Test for No Images in an Array</h1>
      <ImageCarousel images={imagestwo} />
    </div>
  )
}

export default App;
