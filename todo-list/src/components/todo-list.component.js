import React from "react";
import Todo from "./Todo.component";

export default function TodoList({ todo, todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            todos={todos}
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
