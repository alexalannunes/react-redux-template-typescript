import { fireEvent, render, screen } from "../test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Counter } from "./Counter";
export const handlers = [
  rest.get("https://api.github.com/users/alexalannunes", (req, res, ctx) => {
    return res(ctx.json({ id: "16847836" }), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
test("click to increment, decrement and incrememnt amount", async () => {
  render(<Counter />);

  const headerCount = screen.getByRole("heading");
  const btnDecrement = screen.getByTestId("decrement");
  const btnIncrement = screen.getByTestId("increment");
  const btnIncrementAmount = screen.getByTestId("incrementAmount");
  const btnGithubId = screen.getByTestId("githubId");

  expect(headerCount).toBeInTheDocument();
  expect(headerCount).toHaveTextContent("0");

  fireEvent.click(btnIncrement);
  expect(headerCount).toHaveTextContent("1");

  fireEvent.click(btnDecrement);
  expect(headerCount).toHaveTextContent("0");

  fireEvent.click(btnIncrementAmount);
  expect(headerCount).toHaveTextContent("10");

  fireEvent.click(btnGithubId);
  expect(await screen.findByText("16847836")).toBeInTheDocument();
});
