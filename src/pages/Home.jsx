import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "History", "Mystery"];

export default function Home() {
  const books = useSelector((state) => state.books.list);

  // pick top 10 popular by rating
  const popular = [...books].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div>
      <section className="hero">
        <h2>Welcome to the Online Library</h2>
        <p>Discover books across categories — read, browse, and contribute.</p>
      </section>

      <section className="categories">
        <h3>Categories</h3>
        <div className="cat-list">
          {categories.map((c) => (
            <Link key={c} to={`/books/${encodeURIComponent(c)}`} className="category">
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular">
        <h3>Popular Books</h3>
        <div className="grid">
          {popular.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>
    </div>
  );
}
