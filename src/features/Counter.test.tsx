import { fireEvent, render, screen } from "../test-utils";
import { Counter } from "./Counter";

test("click to increment, decrement and incrememnt amount", async () => {
  render(<Counter />);

  const headerCount = screen.getByRole("heading");
  const btnDecrement = screen.getByTestId("decrement");
  const btnIncrement = screen.getByTestId("increment");
  const btnIncrementAmount = screen.getByTestId("incrementAmount");

  expect(headerCount).toBeInTheDocument();
  expect(headerCount).toHaveTextContent("0");

  fireEvent.click(btnIncrement);
  expect(headerCount).toHaveTextContent("1");

  fireEvent.click(btnDecrement);
  expect(headerCount).toHaveTextContent("0");

  fireEvent.click(btnIncrementAmount);
  expect(headerCount).toHaveTextContent("10");
});
