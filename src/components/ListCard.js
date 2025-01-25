import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) => {
  return (
    <div>
      <h3>{list.name}</h3>
      <p>{list.note}</p>
      <Link to={`/list/${list.id}`}>View Items</Link>
    </div>
  );
};

export default ListCard;
