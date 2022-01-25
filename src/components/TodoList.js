import React from "react";
import Todo from "./Todo";
import "./style.css";
import AddNewTodo from "./AddNewTodo";

function TodoList() {
  const [todos, setTodos] = React.useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:8080/api/", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  };

  React.useEffect(() => {
    fetchTodos();
  }, []);

  const AddTodo = () => {
    fetch("http://localhost:8080/api/new", {
      method: "post",
      body: JSON.stringify({
        title: "",
        completed: false,
      }),
    });
    fetchTodos();
  };

  return (
    <div className="todolist-container">
      <h1>Personal Todos</h1>
      <div className="todolist">
        {todos.map((todo, todoIdx) => (
          <Todo data={todo} key={todoIdx} />
        ))}
        <AddNewTodo handleChange={AddTodo} />
      </div>
    </div>
  );
}

export default TodoList;
