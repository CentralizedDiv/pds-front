import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders 'Testing CI with GH Actions' string", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Testing CI with GH Actions/i);
  expect(linkElement).toBeInTheDocument();
});
