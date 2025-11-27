export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      value={value}
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
