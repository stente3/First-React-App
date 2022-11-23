import image1 from './assets/sedans.svg';
import image2 from './assets/suvs.svg';
import image3 from './assets/luxury.svg';

import './App.css';
import { Card, CardStructure } from './components/card';

const card1: CardStructure = {
  image: image1,
  heading: 'Sedans',
  paragraph:
    'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
  color: 'orange',
};
const card2: CardStructure = {
  image: image2,
  heading: 'Suvs',
  paragraph:
    'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
  color: 'blue',
};
const card3: CardStructure = {
  image: image3,
  heading: 'Luxury',
  paragraph:
    'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
  color: 'green',
};

function App() {
  return (
    <div className='App'>
      <Card
        image={card1.image}
        heading={card1.heading}
        paragraph={card1.paragraph}
        color={card1.color}
      />
      <Card
        image={card2.image}
        heading={card2.heading}
        paragraph={card2.paragraph}
        color={card2.color}
      />
      <Card
        image={card3.image}
        heading={card3.heading}
        paragraph={card3.paragraph}
        color={card3.color}
      />
    </div>
  );
}

export default App;
