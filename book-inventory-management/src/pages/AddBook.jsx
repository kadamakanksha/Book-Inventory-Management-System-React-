import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import BookForm from "../components/BookForm";

export default function AddBook() {
  const navigate = useNavigate();

  const addBook = data => {
    api.post("/books", data).then(() => navigate("/"));
  };

  return <BookForm onSubmit={addBook} />;
}