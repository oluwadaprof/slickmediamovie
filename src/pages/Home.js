import React from "react";
import Category from "../components/category/Category";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Search from "../components/search/Search";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <div className="content">
        <Search />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Home;
