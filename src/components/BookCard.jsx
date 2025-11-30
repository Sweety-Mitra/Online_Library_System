import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {

  // Function to generate stars dynamically
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);      // full stars
    const halfStar = rating % 1 >= 0.3 ? 1 : 0; // half star only if >= 0.3
    const emptyStars = 5 - fullStars - halfStar;

    return (
      "★".repeat(fullStars) +
      (halfStar ? "½" : "") +
      "☆".repeat(emptyStars)
    );
  };

  return (
    <div className="book-card">

      {/* BOOK IMAGE */}
      <img
        src={book.image}
        alt={book.title}
        className="book-image"
      />

      {/* TITLE */}
      <h3>{book.title}</h3>

      {/* META */}
      <p className="meta">
        by {book.author} • {book.category}
      </p>

      {/* RATING */}
      <p className="rating">
        {getStars(book.rating)} ({book.rating})
      </p>

      {/* DESCRIPTION */}
      <p className="desc">
        {book.description.slice(0, 120)}
        {book.description.length > 120 ? "..." : ""}
      </p>

      {/* BUTTON */}
      <Link to={`/book/${book.id}`} className="btn small">
        View Details
      </Link>
    </div>
  );
}
