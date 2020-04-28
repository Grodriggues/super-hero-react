import React, { Fragment } from "react";
import HeroContext from "../../context/hero/heroContext";
import HeroInfo from "../Hero/HeroInfo";

function HeroModal() {
  const { hero } = React.useContext(HeroContext);
  console.log(hero);
  const style = {
    width: "100%",
    height: "300px"
  };

  return (
    <div id="see-details-modal" class="modal">
      <div class="modal-content">{hero && <HeroInfo hero={hero} />}</div>
      <ul class="collapsible">
        {hero &&
          Object.keys(hero).map(proper => (
            <li>
              {console.log(proper)}
              <div class="collapsible-header">{proper}</div>
              <div class="collapsible-body">
                {typeof hero[proper] === "object" ? (
                  Object.keys(hero[proper]).map(property => (
                    <p>
                      {" "}
                      {property} : {hero[proper][property].toString()}
                    </p>
                  ))
                ) : (
                  <p>{hero[proper].toString()}</p>
                )}
              </div>
            </li>
          ))}
      </ul>

      <div class="modal-footer"></div>
    </div>
  );
}

export default HeroModal;
