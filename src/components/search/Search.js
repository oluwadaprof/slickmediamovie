import "./search.scss";
import { useState, useEffect } from "react";

const Search = () => {
  //handle the typed input and stores in a state
  const [input, setInput] = useState("");
  const [ setSearchedMovies] = useState([]);

  //set the searched input to query the api
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
        //set the queried result into a searched state
        setSearchedMovies(data);
      }).catch((err) => {
        console.log(err)
      })
  }, );

  // console.log("worked", searchedMovies);

//what's left to do is to map the result into the ui and also create an empty state message for the search function

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
