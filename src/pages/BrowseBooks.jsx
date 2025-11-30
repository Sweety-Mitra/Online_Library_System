import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function BrowseBooks() {
  const { category } = useParams(); // optional
  const books = useSelector((state) => state.books.list);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = books;
    if (category) {
      const c = decodeURIComponent(category).toLowerCase();
      list = list.filter((b) => b.category.toLowerCase() === c);
    }
    if (q) {
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }
    return list;
  }, [books, category, query]);

  return (
    <div>
      {/* <header className="page-header">
        <h2>Browse Books {category ? `— ${decodeURIComponent(category)}` : ""}</h2>
        <Link to="/add-book" className="btn">Add Book</Link>
      </header> */}

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search by title or author..."
      />

      <div className="grid">
        {filtered.length === 0 ? (
          <p>No books found. Try another category or search.</p>
        ) : (
          filtered.map((b) => <BookCard key={b.id} book={b} />)
        )}
      </div>
    </div>
  );
}
