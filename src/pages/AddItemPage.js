import React from "react";
import { useParams } from "react-router-dom";

const AddItemPage = () => {
  const { listId } = useParams();

  return (
    <div>
      <h1>Add an Item to List {listId}</h1>
      <form>
        <label>
          Item Name:
          <input type="text" name="itemName" />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
