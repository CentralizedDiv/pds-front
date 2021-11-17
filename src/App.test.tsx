import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'Testing CI with GH Actions' string", () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing CI with GH Actions/i);
  expect(linkElement).toBeInTheDocument();
});
