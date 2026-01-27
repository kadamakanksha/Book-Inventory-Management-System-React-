import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Book Inventory</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}