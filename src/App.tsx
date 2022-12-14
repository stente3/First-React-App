import image1 from './assets/sedans.svg';
import image2 from './assets/suvs.svg';
import image3 from './assets/luxury.svg';

import './App.css';
import { Card, CardStructure } from './components/Card';

const cards: CardStructure[] = [
  {
    id: 1,
    image: image1,
    heading: 'Sedans',
    paragraph:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: 'orange',
  },
  {
    id: 2,
    image: image2,
    heading: 'Suvs',
    paragraph:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: 'blue',
  },
  {
    id: 3,
    image: image3,
    heading: 'Luxury',
    paragraph:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: 'green',
  },
];

const App = () => {
  return (
    <div className='App'>
      {cards.map(({ id, image, heading, paragraph, color }: CardStructure) => {
        return (
          <Card
            key={id}
            id={id}
            image={image}
            heading={heading}
            paragraph={paragraph}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default App;
