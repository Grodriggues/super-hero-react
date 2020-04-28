import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./animate.css";
import "./App.css";
import HeroItem from "./components/Hero/HeroItem";

//Layout Components
import Navbar from "./components/Layout/Navbar";
import SearchBar from "./components/Layout/SearchBar";
import Footer from "./components/Layout/Footer";
import HeroState from "./context/hero/HeroState";
//Heroes
import Heroes from "./components/Hero/Heroes";
import HeroModal from "./components/Hero/HeroModal";

function App() {
  React.useEffect(() => {
    M.AutoInit();
  });
  return (
    <HeroState>
      <Fragment>
        <Navbar />
        <SearchBar />
        <div className="container row">
          <Heroes />
        </div>
        <HeroModal />
        
      </Fragment>
    </HeroState>
  );
}

export default App;
