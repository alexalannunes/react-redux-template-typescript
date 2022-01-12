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
    dispatch(fetchByUsername());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button data-testid="decrement" onClick={handleDecrement}>
        -
      </button>
      <button data-testid="increment" onClick={handleIncrement}>
        +
      </button>
      <button data-testid="incrementAmount" onClick={handleIncrementByAmount}>
        +10
      </button>
      <button data-testid="githubId" onClick={handleFetchGithubUser}>
        get alexalannunes' github id
      </button>
    </div>
  );
};

export { Counter };
