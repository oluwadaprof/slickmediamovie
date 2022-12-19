import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <form>
        <label>Search</label>
        <input type="input" name="search" placeholder="text" />
      </form>
    </div>
  );
};

export default Search;
