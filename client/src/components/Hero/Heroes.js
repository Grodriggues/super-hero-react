import React, { useEffect, useContext, Fragment } from "react";
import HeroContext from "../../context/hero/heroContext";
import HeroItem from "./HeroItem";
import Loading from "../Layout/Loading";

function Heroes() {
  const { setHeroes, heroes, loading } = useContext(HeroContext);
  useEffect(() => {
    setHeroes();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if(!heroes){
    return null
  }

  
  console.log(heroes)
  return (
    <Fragment>
      {heroes && heroes.map(({ data },id) => <HeroItem hero={data} key={id}/>)}
    </Fragment>
  );
}

export default Heroes;
