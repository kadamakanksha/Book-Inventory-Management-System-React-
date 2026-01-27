import { useEffect, useState } from "react";
import { api } from "../api/api";
import BookTable from "../components/BookTable";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then(res => setBooks(res.data));
  }, []);

  const deleteBook = id => {
    api.delete(`/books/${id}`).then(() =>
      setBooks(books.filter(b => b.id !== id))
    );
  };

  return <BookTable books={books} onDelete={deleteBook} />;
}