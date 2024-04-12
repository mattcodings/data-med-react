import React, { useState } from "react";

function SearchableList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Mango",
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Searchable List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
