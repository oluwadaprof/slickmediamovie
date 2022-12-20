import "./search.scss";
import { useState, useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const url = `http://www.omdbapi.com/?t=${input}&apikey=6a2d6091`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setSearchedMovies(data);
      }).catch((err) => {
        console.log(err)
      })
  }, []);

  console.log("worked", searchedMovies);


  const submitHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };


  return (
    <div className="search">
      <form>
        <label>Search</label>
        <input
          onChange={submitHandler}
          type="text"
          name="search"
          placeholder="Search Movie"
        />
      </form>

    </div>
  );
};

export default Search;
