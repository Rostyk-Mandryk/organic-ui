import React from 'react';
import Star from './star';
import PropTypes from "prop-types";

const Stars = ({stars}) => {
  const starArray = new Array(stars).fill(0);

  return (
    <div>
      {starArray.map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number
};

export default Stars;
