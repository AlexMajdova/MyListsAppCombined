import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ListDetailsPage = () => {
  const { listId } = useParams();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    rating: "",
    difficulty: "",
    description: "",
    time: "",
    favorite: false,
  });

  const addItem = (e) => {
    e.preventDefault();

    if (newItem.name.trim() === "") return;

    const newItemWithId = {
      ...newItem,
      id: items.length + 1,
    };

    setItems([...items, newItemWithId]);
    setNewItem({
      name: "",
      rating: "",
      difficulty: "",
      description: "",
      time: "",
      favorite: false,
    });
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <div>
      <h1>List Details</h1>
      <p>Viewing items for List ID: {listId}</p>

      <form onSubmit={addItem}>
        <label>
          Item Name:
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Enter item name"
            required
          />
        </label>
        <br />
        <label>
          Rating (1-5):
          <input
            type="number"
            value={newItem.rating}
            onChange={(e) => setNewItem({ ...newItem, rating: e.target.value })}
            placeholder="Enter rating"
            min="1"
            max="5"
          />
        </label>
        <br />
        <label>
          Difficulty (1-5):
          <input
            type="number"
            value={newItem.difficulty}
            onChange={(e) =>
              setNewItem({ ...newItem, difficulty: e.target.value })
            }
            placeholder="Enter difficulty"
            min="1"
            max="5"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            placeholder="Enter description"
          ></textarea>
        </label>
        <br />
        <label>
          Time (e.g., 30 min):
          <input
            type="text"
            value={newItem.time}
            onChange={(e) => setNewItem({ ...newItem, time: e.target.value })}
            placeholder="Enter time"
          />
        </label>
        <br />
        <label>
          Favorite:
          <input
            type="checkbox"
            checked={newItem.favorite}
            onChange={(e) =>
              setNewItem({ ...newItem, favorite: e.target.checked })
            }
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>

      <h2>Items in List</h2>
      {items.length === 0 ? (
        <p>No items in this list yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - Rating: {item.rating || "N/A"}, 
              Difficulty: {item.difficulty || "N/A"}, Time: {item.time || "N/A"}
              <br />
              Description: {item.description || "No description provided"}
              <br />
              Favorite: {item.favorite ? "Yes" : "No"}
              <br />
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              <button onClick={() => toggleFavorite(item.id)}>
                {item.favorite ? "Unfavorite" : "Favorite"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListDetailsPage;
