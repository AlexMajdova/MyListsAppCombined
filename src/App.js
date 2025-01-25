import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import your components/pages
import HomePage from "./pages/HomePage";
import ListDetailsPage from "./pages/ListDetailsPage";
import AddListPage from "./pages/AddListPage";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-list">Add List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list/:listId" element={<ListDetailsPage />} />
          <Route path="/add-list" element={<AddListPage />} />
          <Route path="/list/:listId/add-item" element={<AddItemPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
