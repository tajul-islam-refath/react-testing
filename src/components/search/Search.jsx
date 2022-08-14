function Search({ value, onChange, children }) {
  return (
    <div className="col-md-6">
      <label htmlFor="search">{children}</label>
      <input
        className="ml-4"
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
