import React from "react";

export default function Form({ todos, setTodos, inputText, setInputText }) {
  const handleInputText = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form>
        <input
          className="input-box"
          type="text"
          onChange={handleInputText}
          value={inputText}
        />
        <button onClick={submitTodoHandler}>Submit</button>
      </form>
    </div>
  );
}
