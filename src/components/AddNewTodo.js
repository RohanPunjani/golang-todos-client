import React from "react";
import { Plus } from "react-feather";

function AddNewTodo({ handleChange }) {
  return (
    <div
      className="todo"
      style={{
        background: "#ddd",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleChange}
    >
      <Plus />
    </div>
  );
}

export default AddNewTodo;
