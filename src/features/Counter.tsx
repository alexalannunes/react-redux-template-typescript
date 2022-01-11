import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  decrement,
  fetchByUsername,
  increment,
  incrementByAmount,
} from "./counterSlice";

const Counter: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(10));
  };

  const handleFetchGithubUser = () => {
    dispatch(fetchByUsername("alexalannunes"));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleIncrementByAmount}>+10</button>
      <button onClick={handleFetchGithubUser}>
        get alexalannunes' github id
      </button>
    </div>
  );
};

export { Counter };
