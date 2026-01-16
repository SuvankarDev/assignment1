import React from "react";
import "./AddTask.css";

function AddTask(props) {
  var nameState = React.useState("");
  var taskName = nameState[0];
  var setTaskName = nameState[1];

  var dateState = React.useState("");
  var taskDate = dateState[0];
  var setTaskDate = dateState[1];

  function handleNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleDateChange(event) {
    setTaskDate(event.target.value);
  }

  function handleAddTask() {
    if (taskName === "" || taskDate === "") {
      return;
    }

    props.onAddTask(taskName, taskDate);

    setTaskName("");
    setTaskDate("");
  }

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={handleNameChange}
        className="add-task-input"
      />

      <input
        type="date"
        value={taskDate}
        onChange={handleDateChange}
        className="add-task-input"
      />

      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
