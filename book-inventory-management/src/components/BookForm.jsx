import { useState } from "react";

export default function BookForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    email: "",
    description: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!Number(form.year)) return alert("Year must be a number");
    if (!form.email.includes("@")) return alert("Invalid email");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Title" required onChange={handleChange} />
      <input name="author" placeholder="Author" required onChange={handleChange} />
      <input name="publisher" placeholder="Publisher" onChange={handleChange} />
      <input name="year" placeholder="Published Year" onChange={handleChange} />
      <input name="email" placeholder="Publisher Email" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <button>Add Book</button>
    </form>
  );
}