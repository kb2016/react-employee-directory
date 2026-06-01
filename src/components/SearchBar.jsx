function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search employees..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
