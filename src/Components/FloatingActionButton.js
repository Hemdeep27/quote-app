import React from 'react';

const FloatingActionButton = ({ onClick }) => {
  return (
    <button className="fab" onClick={onClick}>
      +
    </button>
  );
};

export default FloatingActionButton;
