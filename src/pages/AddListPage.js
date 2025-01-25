import React from "react";

const AddListPage = () => {
  return (
    <div>
      <h1>Add a New List</h1>
      <form>
        <label>
          List Name:
          <input type="text" name="listName" />
        </label>
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default AddListPage;
