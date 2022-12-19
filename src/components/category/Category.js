import "./category.scss";
import { useEffect, useState } from "react";

const Category = () => {

  const [movie, setMovie] = useState("");
  const url = "https://www.omdbapi.com";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setMovie(data);
      });
  }, []);

  console.log("movie:", movie);

  return (
    <div className="category">
      <p>Movie Category Name</p>
      <div className="movies">
        <div className="movie"><p>name</p></div>
        <div className="movie"><p>name</p></div>
        <div className="movie"><p>name</p></div>
        <div className="movie"><p>name</p></div>
        <div className="movie"><p>name</p></div>
        <div className="movie"><p>name</p></div>
      </div>
    </div>
  );
};

export default Category;
