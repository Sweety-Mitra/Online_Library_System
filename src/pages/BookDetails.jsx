import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.list.find(b => b.id === id));
  const navigate = useNavigate();

  if (!book) {
    return (
      <div>
        <h2>Book not found</h2>
        <button className="btn" onClick={() => navigate("/books")}>Back to Browse</button>
      </div>
    );
  }

  return (
    <div className="details">
      <h2>{book.title}</h2>
      <p className="meta">by {book.author} • {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p className="desc">{book.description}</p>
      <button className="btn" onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
}
