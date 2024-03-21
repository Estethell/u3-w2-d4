import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";

describe("Verifica del funzionamento della barra di ricerca dei libri", () => {
  it("Verifica della presenza della barra di ricerca sul DOM", () => {
    const books = [
      { asin: "1", title: "Libro 1" },
      { asin: "2", title: "Libro 2" },
    ];

    render(<BookList books={books} />);
    const barra = screen.getByPlaceholderText(/cerca un libro/i);
    expect(barra).toBeInTheDocument();
  });
});
