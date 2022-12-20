import "./category.scss";
import { useEffect, useState } from "react";


const Category = () => {
  //created a use state
  const [movies, setMovies] = useState([]);

  //fetched api
  const url = `http://www.omdbapi.com/?s=series&apikey=6a2d6091`;
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
        //set recieved data to a useState 
        setMovies(data.Search);
      }).catch((err) => {
        console.log(err)
      });
  }, );

  //sort api results into movie and series categories
 const sortedCategory = movies.sort((s,m) => {
  //convert to lowercase
   const nameA = s.Type.toUpperCase()
   const nameB = m.Type.toUpperCase()
 
   //re-arrange alphabetically
   if (nameA > nameB){
    return -1
   }

   return nameA;
 
 })

//split the categories in two
const resultSeries = sortedCategory.slice(0, 7);
const resultMovies = sortedCategory.slice(8,10)

  return (
    <>
      <div className="category">
        <p>Series</p>
        <div className="movies">
          {/* mapped the series category */}
          {resultSeries.map((el, index) => (
            <div
              className="movie"
              style={{
                backgroundImage: `url(${el.Poster})`,
              }}
              key={index}
            >
              <p>{el.Title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="category">
        <p>Movies</p>
        <div className="movies">
             {/* mapped the movies category */}
          {resultMovies.map((el, index) => (
            <div
              className="movie"
              style={{
                backgroundImage: `url(${el.Poster})`,
              }}
              key={index}
            >
              <p>{el.Title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
