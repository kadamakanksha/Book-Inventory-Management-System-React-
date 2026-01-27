import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="details">
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Publisher:</b> {book.publisher}</p>
      <p><b>Year:</b> {book.year}</p>
      <p><b>Email:</b> {book.email}</p>
      <p>{book.description}</p>
    </div>
  );
}