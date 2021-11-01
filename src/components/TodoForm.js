import React from "react";

const TodoForm = ({ handleSubmit, editId, setTodo, todo }) => {
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
