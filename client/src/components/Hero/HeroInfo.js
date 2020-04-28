import React from "react";

function HeroInfo({ hero }) {
  const { id, name, powerstats, biography, image, work } = hero;
  return (
    <>
      <h4 style={{
              background:"black",
              color:"white",
              display:"inline-block",
              padding:'1rem'
            }}>{name}</h4>
      <p>Info about {name}</p>
    </>
  );
}

export default HeroInfo;
