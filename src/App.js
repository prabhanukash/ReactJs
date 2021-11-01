import "./App.css";
// import MainInput from "./components/MainInput";
import "./components/TodoForm";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
    setTodo("");
  };

  const handleDelete = (id) => {
    const delTodos = todos.filter((to) => to.id !== id);
    setTodos([...delTodos]);
  };

  const handleEdit = (id) => {
    const edittodo = todos.find((i) => i.id === id);
    setTodo(edittodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
