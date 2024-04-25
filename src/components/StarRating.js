import React, { useState } from 'react';

export default function ({ initialValue, onRate }) {
  const [rating, setRating] = useState(initialValue);

  const handleRate = (value) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div>
      <span>Rating: {rating}</span>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => handleRate(value)}>
          {value <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}
