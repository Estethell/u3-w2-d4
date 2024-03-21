import { render, screen, fireEvent } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Verifica del funzionamento di CommentArea", () => {
  it("verifica che CommentArea si visualizzi sul DOM", () => {
    render(<CommentArea />);
    const area = screen.getByTestId(/area/);

    expect(area).toBeInTheDocument();
  });
  it("Verifica che CommentList non appaia sul DOM", () => {
    render(<CommentArea />);
    const lista = screen.queryAllByTestId(/lista/);
    expect(lista).toHaveLength(0);
  });
});
