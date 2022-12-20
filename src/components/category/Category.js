import "./category.scss";
import { useEffect, useState } from "react";


const Category = () => {
  const [movies, setMovies] = useState([]);
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
        setMovies(data.Search);
      });
  }, []);

 const sortedSeries = movies.sort((s,m)=> {
   const nameA = s.Type.toUpperCase()
   const nameB = m.Type.toUpperCase()

   if (nameA > nameB){
    return -1
   }
 })

//  console.log('sorted:' , sortedSeries)

const resultSeries = sortedSeries.slice(0, 7);
const resultMovies = sortedSeries.slice(8,10)

  return (
    <>
      <div className="category">
        <p>Series</p>
        <div className="movies">
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
