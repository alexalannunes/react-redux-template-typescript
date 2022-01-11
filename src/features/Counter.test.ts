import counterSlice, { increment } from "./counterSlice";

test("test counter increment", () => {
  expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 });
});
