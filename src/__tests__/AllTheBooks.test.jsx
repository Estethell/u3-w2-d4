import { render, screen, fireEvent } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";

it("Verifica che le card siano nel giusto numero", () => {
  render(<AllTheBooks />);
  const arrayBooks = screen.getAllByTestId(/arrayCard/);

  expect(arrayBooks).toHaveLength(150);
});
