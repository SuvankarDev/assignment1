import React from "react";
import "./TaskItem.css";

function TaskItem(props) {

  function handleCheckboxChange(event) {
    event.stopPropagation();
    props.onToggleComplete(props.id);
  }

  function handleUrgentClick(event) {
    event.stopPropagation();
    props.onToggleUrgent(props.id);
  }

  var taskClass = "task-item";

  if (props.urgent === true) {
    taskClass += " task-urgent";
  }

  if (props.completed === true) {
    taskClass += " task-completed";
  }

  return (
    <div className={taskClass}>

      <input
        type="checkbox"
        checked={props.completed}
        onChange={handleCheckboxChange}
        className="task-checkbox"
      />

      <div className="task-content">
        <span className="task-name">{props.name}</span>
        <span className="task-date">({props.date})</span>
      </div>

      <button
        onClick={handleUrgentClick}
        className="urgent-button"
      >
        {props.urgent === true ? "Not Urgent" : "Urgent"}
      </button>

    </div>
  );
}

export default TaskItem;
