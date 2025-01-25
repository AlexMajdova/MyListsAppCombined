import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Type: {item.type}</p>
      <p>Rating: {item.rating}</p>
      <p>Difficulty: {item.difficulty}</p>
      <p>Time: {item.time} hours</p>
    </div>
  );
};

export default ItemCard;
