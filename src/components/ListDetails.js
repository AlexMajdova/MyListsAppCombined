import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';

const ListDetails = ({ listId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${listId}`)
      .then(response => setItems(response.data.itemList))
      .catch(error => console.error('Error fetching items:', error));
  }, [listId]);

  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListDetails;
