import React from "react";
import { useLocation } from "react-router-dom";

export default function ItemDetails() {
    const {state} = useLocation();
    const todo = state?.todo;
    if (!todo)
    {
        return(
            <div>No item data available. Please navigate from the list.</div>
        )
    }
    console.log(todo)
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-3 border rounded bg-light shadow m-5">
        <label className="fw-bold text-primary">{todo.title}</label>
        <div className="d-flex align-items-center">
          {todo.done ? (
            <i
              className="bi bi-check-circle-fill text-success me-2"
              style={{ fontSize: "1rem", cursor: "pointer" }}
            ></i>
          ) : (
            <i
              className="bi bi-check-circle text-success me-2"
              style={{ fontSize: "1rem", cursor: "pointer" }}
            ></i>
          )}
      
        </div>
        <label className="text-muted">{todo.description}</label>

      </div>
    </div>
  );
}
