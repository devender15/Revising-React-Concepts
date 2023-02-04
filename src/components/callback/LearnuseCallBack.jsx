import React, { memo, useCallback, useState, useRef } from "react";

function Todo({ todos, addTodo }) {
  const todoRef = useRef(0);

  return (
    <div className="my-6">
      <h2 className="my-2">My Todos</h2>
      {todos?.map((todo, idx) => {
        return <p key={idx}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add todo</button>

      <p className="my-3">Times rendered: {todoRef.current++}</p>
    </div>
  );
}

Todo = memo(Todo);

const LearnuseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, "✅ new Todo"]);
  }, [todos]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div className="flex flex-col space-y-2 items-center">
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default LearnuseCallBack;
