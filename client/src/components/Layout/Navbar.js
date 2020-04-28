import React from "react";

function Navbar() {
  const style = {
    paddingTop: 10,
    margin: 0
  };
  return (
    <nav>
      <div className="nav-wrapper black">
        <h4 className="center-align row animated fadeIn" style={style}>
          HeroesFinder
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
