import counterSlice, { increment } from "./counterSlice";

test("test counter", () => {
  expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 });
});
