import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div>
      <li>
        <h1>{text}</h1>
      </li>
      <button onClick={handleDelete}>remove</button>
    </div>
  );
}
