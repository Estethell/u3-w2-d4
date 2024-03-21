import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

it("testa la presenza di alert", () => {
  render(<Welcome />);
  const alert = screen.getByRole(/alert/);
  expect(alert).toBeInTheDocument();
});
