import React from "react";
import { Edit, Trash, Check } from "react-feather";
function Todo({ data }) {
  const [editText, setEditText] = React.useState(true);
  const [text, setText] = React.useState(data.title);
  const [isCompleted, setIsCompleted] = React.useState(data.completed);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const deleteTodo = (id) => {
    fetch("http://localhost:8080/api/delete/" + id, {
      method: "delete",
    });
  };

  const updateTodo = (id) => {
    fetch("http://localhost:8080/api/update/" + id, {
      method: "put",
      body: JSON.stringify({
        title: text,
        completed: isCompleted,
      }),
    });
  };

  const updateTodoStatus = (id) => {
    fetch("http://localhost:8080/api/update/" + id, {
      method: "put",
      body: JSON.stringify({
        completed: !isCompleted,
        title: text,
      }),
    });
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="todo" style={{ display: isDeleted ? "none" : "flex" }}>
      <div className="todo-text">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            updateTodoStatus(data.id);
          }}
        />{" "}
        &ensp;
        <input
          type="text"
          className={editText ? "text-field active-text" : "text-field"}
          value={text}
          disabled={editText}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="todo-actions">
        <div
          className="todo-action-button"
          onClick={() => {
            setEditText(!editText);
            updateTodo(data.id);
          }}
        >
          {editText ? <Edit /> : <Check />}
        </div>
        <div
          className="todo-action-button"
          // onClick={() => setEditText(!editText)}
          onClick={() => {
            deleteTodo(data.id);
            setIsDeleted(true);
          }}
        >
          <Trash />
        </div>
      </div>
    </div>
  );
}

export default Todo;
