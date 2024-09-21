import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import hair1 from './assets/alpaca/hair/default.png'; 
import ear1 from './assets/alpaca/ears/default.png'; 
import eye1 from './assets/alpaca/eyes/default.png'; 
import accessory1 from './assets/alpaca/accessories/earings.png'; 
import background1 from './assets/alpaca/backgrounds/blue50.png'; 
import leg1 from './assets/alpaca/leg/default.png'; 
import mouth1 from './assets/alpaca/mouth/default.png'; 
import neck1 from './assets/alpaca/neck/default.png'; 
import nose from './assets/alpaca/nose.png'; 

const App = () => {
  const [hair, setHair] = useState(hair1);
  const [ears, setEars] = useState(ear1);
  const [eyes, setEyes] = useState(eye1);
  const [leg, setLeg] = useState(leg1);
  const [mouth, setMouth] = useState(mouth1);
  const [neck, setNeck] = useState(neck1);
  const [accessories, setAccessories] = useState(accessory1);
  const [background, setBackground] = useState(background1);
  const [selectedFeature, setSelectedFeature] = useState('');

  const options = {
    accessoryOptions: [
      { name: 'Earrings', src: require('./assets/alpaca/accessories/earings.png') },
      { name: 'Flower', src: require('./assets/alpaca/accessories/flower.png') },
      { name: 'Glasses', src: require('./assets/alpaca/accessories/glasses.png') },
      { name: 'Headphone', src: require('./assets/alpaca/accessories/headphone.png') },
    ],
    backgroundOptions: [
      { name: 'Blue', src: require('./assets/alpaca/backgrounds/blue50.png') },
      { name: 'Red', src: require('./assets/alpaca/backgrounds/red50.png') },
      { name: 'Yellow', src: require('./assets/alpaca/backgrounds/yellow50.png') },
      { name: 'Green', src: require('./assets/alpaca/backgrounds/green50.png') },
    ],
    earOptions: [
      { name: 'Default', src: require('./assets/alpaca/ears/default.png') },
      { name: 'Tilt Backward', src: require('./assets/alpaca/ears/tilt-backward.png') },
      { name: 'Tilt Forward', src: require('./assets/alpaca/ears/tilt-forward.png') },
    ],
    eyeOptions: [
      { name: 'Angry', src: require('./assets/alpaca/eyes/angry.png') },
      { name: 'Default', src: require('./assets/alpaca/eyes/default.png') },
      { name: 'Naughty', src: require('./assets/alpaca/eyes/naughty.png') },
      { name: 'Panda', src: require('./assets/alpaca/eyes/panda.png') },
      { name: 'Smart', src: require('./assets/alpaca/eyes/smart.png') },
      { name: 'Star', src: require('./assets/alpaca/eyes/star.png') },
    ],
    hairOptions: [
      { name: 'Bang', src: require('./assets/alpaca/hair/bang.png') },
      { name: 'Default', src: require('./assets/alpaca/hair/default.png') },
      { name: 'Curls', src: require('./assets/alpaca/hair/curls.png') },
      { name: 'Elegant', src: require('./assets/alpaca/hair/elegant.png') },
      { name: 'Fancy', src: require('./assets/alpaca/hair/fancy.png') },
      { name: 'Short', src: require('./assets/alpaca/hair/short.png') },
      { name: 'Quiff', src: require('./assets/alpaca/hair/quiff.png') },
    ],
    legOptions: [
      { name: 'Bubble-tea', src: require('./assets/alpaca/leg/bubble-tea.png') },
      { name: 'Default', src: require('./assets/alpaca/leg/default.png') },
      { name: 'Cookie', src: require('./assets/alpaca/leg/cookie.png') },
      { name: 'Game-console', src: require('./assets/alpaca/leg/game-console.png') },
      { name: 'Tilt Backward', src: require('./assets/alpaca/leg/tilt-backward.png') },
      { name: 'Tilt Forward', src: require('./assets/alpaca/leg/tilt-forward.png') },
    ],
    mouthOptions: [
      { name: 'Astonished', src: require('./assets/alpaca/mouth/astonished.png') },
      { name: 'Default', src: require('./assets/alpaca/mouth/default.png') },
      { name: 'Eating', src: require('./assets/alpaca/mouth/eating.png') },
      { name: 'Laugh', src: require('./assets/alpaca/mouth/laugh.png') },
      { name: 'Tongue', src: require('./assets/alpaca/mouth/tongue.png') },
    ],
    neckOptions: [
      { name: 'Bend Backward', src: require('./assets/alpaca/neck/bend-backward.png') },
      { name: 'Bend Forward', src: require('./assets/alpaca/neck/bend-forward.png') },
      { name: 'Default', src: require('./assets/alpaca/neck/default.png') },
      { name: 'Thick', src: require('./assets/alpaca/neck/thick.png') },
    ],
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };

  const randomize = () => {
    const randomOptions = {
      hair: options.hairOptions[Math.floor(Math.random() * options.hairOptions.length)].src,
      ears: options.earOptions[Math.floor(Math.random() * options.earOptions.length)].src,
      eyes: options.eyeOptions[Math.floor(Math.random() * options.eyeOptions.length)].src,
      leg: options.legOptions[Math.floor(Math.random() * options.legOptions.length)].src,
      mouth: options.mouthOptions[Math.floor(Math.random() * options.mouthOptions.length)].src,
      neck: options.neckOptions[Math.floor(Math.random() * options.neckOptions.length)].src,
      accessories: options.accessoryOptions[Math.floor(Math.random() * options.accessoryOptions.length)].src,
      background: options.backgroundOptions[Math.floor(Math.random() * options.backgroundOptions.length)].src,
    };

    setHair(randomOptions.hair);
    setEars(randomOptions.ears);
    setEyes(randomOptions.eyes);
    setLeg(randomOptions.leg);
    setMouth(randomOptions.mouth);
    setNeck(randomOptions.neck);
    setAccessories(randomOptions.accessories);
    setBackground(randomOptions.background);
  };

  const downloadImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300; // Adjust as needed
    canvas.height = 400; // Adjust as needed
  
    const imgElements = [
      new Image(), // Background
      new Image(), // Ears
      new Image(), // Neck
      new Image(), // Nose
      new Image(), // Mouth
      new Image(), // Hair
      new Image(), // Eyes
      new Image(), // Leg
      new Image(), // Accessories
    ];
  
    const sources = [background, ears, neck, nose, mouth, hair, eyes, leg, accessories];
    imgElements.forEach((img, index) => {
      img.src = sources[index];
    });
  
    let loadedImages = 0;
  
    imgElements.forEach((img) => {
      img.onload = () => {
        loadedImages++;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        if (loadedImages === imgElements.length) {
          const link = document.createElement('a');
          link.download = 'alpaca-image.png';
          link.href = canvas.toDataURL();
          link.click();
        }
      };
      img.onerror = () => {
        console.error('Image failed to load:', img.src);
      };
    });
  };
  

  return (
    <div className="app">
      <div className="heading-container">
        <h1>ALPACA GENERATOR</h1>
      </div>
      <div className="image-container">
        <img src={background} alt="Background" className="layer" />
        <img src={ears} alt="Ears" className="layer" />
        <img src={neck} alt="Neck" className="layer" />
        <img src={nose} alt="Nose" className="layer" />
        <img src={mouth} alt="Mouth" className="layer" />
        <img src={hair} alt="Hair" className="layer" />
        <img src={eyes} alt="Eyes" className="layer" />
        <img src={leg} alt="Leg" className="layer" />
        <img src={accessories} alt="Accessories" className="layer" />
      </div>

      <div className="heading-container">
        <h3>Accessorize the Alpaca</h3>
      </div>

      <div className="button-container">
        <button onClick={() => handleFeatureSelect('eyes')}>Eyes</button>
        <button onClick={() => handleFeatureSelect('accessories')}>Accessories</button>
        <button onClick={() => handleFeatureSelect('background')}>Background</button>
        <button onClick={() => handleFeatureSelect('ears')}>Ears</button>
        <button onClick={() => handleFeatureSelect('hair')}>Hair</button>
        <button onClick={() => handleFeatureSelect('leg')}>Leg</button>
        <button onClick={() => handleFeatureSelect('mouth')}>Mouth</button>
        <button onClick={() => handleFeatureSelect('neck')}>Neck</button>
      </div>

      <div className="heading-container">
        <h3>Style</h3>
      </div>

      <div className="options-container">
        {selectedFeature === 'eyes' && options.eyeOptions.map(option => (
          <button key={option.name} onClick={() => setEyes(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'accessories' && options.accessoryOptions.map(option => (
          <button key={option.name} onClick={() => setAccessories(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'background' && options.backgroundOptions.map(option => (
          <button key={option.name} onClick={() => setBackground(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'ears' && options.earOptions.map(option => (
          <button key={option.name} onClick={() => setEars(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'hair' && options.hairOptions.map(option => (
          <button key={option.name} onClick={() => setHair(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'leg' && options.legOptions.map(option => (
          <button key={option.name} onClick={() => setLeg(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'mouth' && options.mouthOptions.map(option => (
          <button key={option.name} onClick={() => setMouth(option.src)}>{option.name}</button>
        ))}
        {selectedFeature === 'neck' && options.neckOptions.map(option => (
          <button key={option.name} onClick={() => setNeck(option.src)}>{option.name}</button>
        ))}
      </div>

      <div className="action-buttons">
        <button onClick={randomize}>Randomize</button>
        <button onClick={downloadImage}>Download</button>
      </div>
    </div>
  );
};

export default App;
