import React from 'react';
import Star from './star';

const App = () => {
  const stars = 5;
  const starArray = new Array(stars).fill(0);

  return (
    <div>
      {starArray.map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

export default App;
