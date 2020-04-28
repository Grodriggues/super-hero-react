import {
  SET_HERO,
  SET_LOADING,
  SET_HEROES,
  GET_HEROES,
  GET_HERO,
  SEARCH_HEROES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_HEROES:
      return { ...state, heroes: action.payload, loading: false };
    case SET_HERO:
      return { ...state, hero: action.payload };
    case SEARCH_HEROES:
      return {
        ...state,
        heroes: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading:true
      }
    case "CLEAR_CURRENT":
      return {
        heroes: null,
        loading: true,
        hero: null
      }
    default:
      return state;
  }
};
