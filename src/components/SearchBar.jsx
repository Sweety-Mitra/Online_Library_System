import React from "react";

export default function SearchBar({ value, onChange, placeholder = "Search by title or author" }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="search-input"
    />
  );
}