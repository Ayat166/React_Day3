import React from 'react'

export default function TodoItem( props ) {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 border rounded bg-light shadow">
      <label className="fw-bold text-primary">{props.todo.title}</label>
      <label className="text-muted">{props.todo.description}</label>
    </div>
  );
}
