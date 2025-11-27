import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="brand">Online Library</h1>
      <nav>
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''}>
          Browse Books
        </NavLink>
        <NavLink to="/add-book" className={({isActive}) => isActive ? 'active' : ''}>
          Add Book
        </NavLink>
      </nav>
    </header>
  );
}
