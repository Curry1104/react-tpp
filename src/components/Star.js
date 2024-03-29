import React from 'react';
import PropTypes from 'prop-types';
import './Star.scss';

const Star = ({value, size = 15}) => {
  const bgSize = `${size}px`;

  return (
    <div className="star" style={{ height: size, width: size * 5, backgroundSize: bgSize }}>
      <div className="star__top" style={{ width: `${value * 10}%`, backgroundSize: bgSize }}/>
    </div>
  );
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number
};
export default Star;