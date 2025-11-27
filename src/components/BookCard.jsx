import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p className="meta">by {book.author} • {book.category}</p>
      <p className="rating">Rating: {book.rating}</p>
      <p className="desc">{book.description.slice(0, 120)}{book.description.length > 120 ? "..." : ""}</p>
      <Link to={`/book/${book.id}`} className="btn small">View Details</Link>
    </div>
  );
}