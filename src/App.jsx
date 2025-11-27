import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  // requirement: 404 page should not include Header component.
  // We'll render Navbar only on non-404 routes by checking pathname startsWith /404 or not.
  const isNotFoundRoute = location.pathname.startsWith("/404");

  return (
    <div className="app">
      {!isNotFoundRoute && <Navbar />}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/404" element={<NotFound />} />
          {/* Catch all to 404, preserve attempted url in query */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
