import React from "react";
import Search from "../Search";

const HomePage = () => {
  return (
    <div className="App">
      <header>
        <h1>Entertainment Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
};

export default HomePage;
