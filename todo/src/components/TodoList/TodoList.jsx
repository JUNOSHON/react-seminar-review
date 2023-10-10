import React, {useState} from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: "123", text: "장보기", stats: "active"},
    {id: "124", text: "공부하기", stats: "active"},
  ]);
  
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (update) => setTodos(todos.map((t) => (t.id === update.id ? update : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
  
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo = {item} onUpdate = {handleUpdate} onDelete = {handleDelete}/>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}