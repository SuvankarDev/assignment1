import React from "react";
import "./SearchBar.css";

function SearchBar(props) {

  function handleNameChange(event) {
    props.onNameChange(event.target.value);
  }

  function handleDateChange(event) {
    props.onDateChange(event.target.value);
  }

  function handleUrgentChange(event) {
    props.onUrgentChange(event.target.checked);
  }

  function handleCompletedChange(event) {
    props.onCompletedChange(event.target.checked);
  }

  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search task name"
        onChange={handleNameChange}
        className="search-input"
      />

      <input
        type="date"
        onChange={handleDateChange}
        className="search-input"
      />

      <label className="search-checkbox">
        <input type="checkbox" onChange={handleUrgentChange} />
        <span>Urgent</span>
      </label>

      <label className="search-checkbox">
        <input type="checkbox" onChange={handleCompletedChange} />
        <span>Completed</span>
      </label>

    </div>
  );
}

export default SearchBar;
