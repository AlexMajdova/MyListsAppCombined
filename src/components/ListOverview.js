import React, { useEffect, useState } from 'react';
import ListCard from './ListCard';
import axios from 'axios';

const ListOverview = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/lists')
      .then(response => setLists(response.data.itemList))
      .catch(error => console.error('Error fetching lists:', error));
  }, []);

  return (
    <div>
      {lists.map(list => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ListOverview;
