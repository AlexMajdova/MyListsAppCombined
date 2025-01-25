import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");

  const addList = (e) => {
    e.preventDefault();
    if (newListName.trim() === "") return;

    const newList = {
      id: lists.length + 1,
      name: newListName,
    };

    setLists([...lists, newList]);
    setNewListName("");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={addList}>
        <label>
          Add New List:
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Enter list name"
          />
        </label>
        <button type="submit">Add List</button>
      </form>

      <h2>My Lists</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
