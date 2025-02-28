import React from "react";

export default function TodoItem(props) {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 border rounded bg-light shadow">
      <label className="fw-bold text-primary">{props.todo.title}</label>
      <div className="d-flex align-items-center">
        {props.todo.done ? (
          <i
            className="bi bi-check-circle-fill text-success me-2"
            style={{ fontSize: "1rem", cursor: "pointer" }}
            onClick={() => props.setDoneState(props.todo.id)}
          ></i>
        ) : (
          <i
            className="bi bi-check-circle text-success me-2"
            style={{ fontSize: "1rem", cursor: "pointer" }}
            onClick={() => props.setDoneState(props.todo.id)}
          ></i>
        )}
        <i
          className="bi bi-trash"
          style={{ cursor: "pointer" }}
          onClick={() => props.setDeleteToDo(props.todo.id)}
        ></i>
      </div>
    </div>
  );
}
