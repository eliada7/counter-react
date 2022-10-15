import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function decreminting() {
    setCount(count - 1);
  }

  function increminting() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <h1>Counter</h1>
        <button onClick={increminting}>+</button>
        <span> {count}</span>
        <button onClick={decreminting}>-</button>
      </div>
      <style jsx>{`
        button {
          background-color: #4caf50;
          border: none;
          border-radius: 10px;
          color: white;
          padding: 15px 32px;
          margin: 15px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
      `}</style>
    </>
  );
}
