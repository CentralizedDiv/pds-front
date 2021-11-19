import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

test("renders 'Dashboard' string", () => {
  const AppRendered = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(AppRendered.container).toBeTruthy();
});
