import counterSlice, {
  decrement,
  fetchByUsername,
  increment,
  incrementByAmount,
} from "./counterSlice";

test("test counter increment", () => {
  expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 });
});
test("test counter decrement", () => {
  expect(counterSlice({ value: 0 }, decrement())).toEqual({ value: -1 });
});
test("test counter increment amount", () => {
  expect(counterSlice({ value: 0 }, incrementByAmount(10))).toEqual({
    value: 10,
  });
});
