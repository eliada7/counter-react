import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function decreminting() {
    setCount((prev) => {
      //console.log(prev);
      return prev - 1;
    });
  }

  function increminting() {
    setCount((prev) => {
      //console.log(prev);
      return prev + 1;
    });
  }
  return (
    <>
      <div className="container">
        <h3>Counter</h3>
        <button onClick={increminting}>+</button>
        <span> {count}</span>
        <button onClick={decreminting}>-</button>
      </div>
      <style jsx>{`
        .container {
          width: 400px;
          height: 250px;
          padding: 15px 32px;
          border-radius: 10px;
          background-color: #d8d8d8;
          text-align: center;
          font-size: 30px;
          margin: auto;
        }
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
