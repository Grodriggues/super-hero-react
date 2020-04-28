import React from "react";
import HeroContext from "../../context/hero/heroContext";

function SearchBar() {
  const [text, setText] = React.useState("");
  const { searchHeros, setHeroes } = React.useContext(HeroContext);
  const timeout = React.useRef(0);

  const style = {
    background: "#333"
  };

  const onChange = event => {
    setText(event.target.value);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (text.length === 1 || text === "") return setHeroes();
      else{
        searchHeros(text);
      }
    }, 500);
  };

  return (
    <nav>
      <div className="nav-wrapper" style={style}>
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search for a hero"
              onChange={onChange}
             
              required
            />
            <label
              className="label-icon"
              htmlFor="search"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-search" />
            </label>
            <i className="fas fa-times"></i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
