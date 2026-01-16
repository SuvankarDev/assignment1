import React from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import "./ListContainer.css";

function ListContainer(props) {
  return (
    <div className="list-container">

      <h2 className="list-title">{props.name}</h2>

      <AddTask onAddTask={props.onAddTask} />

      <div className="task-list">
        {props.tasks.map(function (task) {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              date={task.date}
              urgent={task.urgent}
              completed={task.completed}
              onToggleUrgent={props.onToggleUrgent}
              onToggleComplete={props.onToggleComplete}
            />
          );
        })}
      </div>

    </div>
  );
}

export default ListContainer;
