import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, increment } from "./counterSlice";

const Counter: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export { Counter };
