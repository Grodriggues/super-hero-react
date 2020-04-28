import React, { useReducer } from "react";
import HeroContext from "./heroContext";
import HeroReducer from "./heroReducer";
import axios from "axios";
import { SET_HEROES, SET_HERO, SET_LOADING, SEARCH_HEROES } from "../types";

//Helpers
import randomUnique from "../../components/helper/randomUnique";


function HeroState(props) {
  const initialState = {
    heroes: null,
    loading: true,
    hero: null
  };

  const [state, dispatch] = useReducer(HeroReducer, initialState);

  const setHeroes = () => {
    setLoading();
    const choices = randomUnique().map(choice => axios.get(`/${choice}`));

    Promise.all(choices).then(values => {
      dispatch({
        type: SET_HEROES,
        payload: values
      });
    });
  };

  const clearHeroes = () => {
    dispatch({
      type: "CLEAR_CURRENT"
    });
  };

  const searchHeros = async name => {
    try {
      setLoading();
      const { data } = await axios.get(`/search/${name}`);
      const results = data.results.map(result => {
        return {
          data: {
            ...result
          }
        };
      });
      if (data) {
        dispatch({
          type: SEARCH_HEROES,
          payload: results
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const setHero = id => {
    const { data } = state.heroes.filter(({ data }) => {
      return data.id === id;
    })[0];

    dispatch({
      type: SET_HERO,
      payload: data
    });
  };

  return (
    <HeroContext.Provider
      value={{
        setHeroes,
        heroes: state.heroes,
        loading: state.loading,
        setHero,
        searchHeros,
        hero: state.hero
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}

export default HeroState;
