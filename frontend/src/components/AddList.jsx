import React from "react";
import "./AddList.css";

function AddList(props) {
  var inputState = React.useState("");
  var listName = inputState[0];
  var setListName = inputState[1];

  function handleInputChange(event) {
    setListName(event.target.value);
  }

  function handleAddList() {
    if (listName === "") {
      return;
    }
    props.onAddList(listName);
    setListName("");
  }

  return (
    <div className="add-list-container">
      <input
        type="text"
        placeholder="Enter list name"
        value={listName}
        onChange={handleInputChange}
        className="add-list-input"
      />
      <button onClick={handleAddList} className="add-list-button">
        Add List
      </button>
    </div>
  );
}

export default AddList;
