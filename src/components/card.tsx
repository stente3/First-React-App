export interface CardStructure {
  image: string;
  heading: string;
  paragraph: string;
  color: 'orange' | 'blue' | 'green';
}

function Card({ image, heading, paragraph, color }: CardStructure) {
  return (
    <div
      className={
        'card ' +
        (color === 'orange'
          ? 'bg-orange'
          : color === 'blue'
          ? 'bg-blue'
          : color === 'green'
          ? 'bg-green'
          : '')
      }
    >
      <img className='card__image' src={image} alt={heading} />
      <h3 className='card__heading'>{heading.toUpperCase()}</h3>
      <p className='card__paragraph'>{paragraph}</p>
      <button className={'button ' + 'button--' + color}>Learn More</button>
    </div>
  );
}

export { Card };
