import React from "react";
import Img from "react-image";
import LoadingImage from "../Layout/LoadingImage";
import HeroContext from "../../context/hero/heroContext";

function HeroItem(props) {
  const { setHero } = React.useContext(HeroContext);
  
  const { hero } = props;
  if (!hero) return null;
  const { id, name, powerstats, biography, image, work } = hero;

  const styleImageLoading = {
    height: "300px",
    background: "#333",
    width: "200px"
  };

  const onClick = () => {
    setHero(id);
  };

  return (
    <div className="row animated fadeIn slow">
      <div className="col s3 m10">
        <div className="card">
          <div className="card-image m10">
            <Img
              src={image.url}
              loader={<LoadingImage />}
              unloader={<div style={styleImageLoading}></div>}
            />
          </div>
          <div className="card-content">
            <h5 >{name}</h5>
            <h6>{biography["full-name"]}</h6>
          </div>
          <div className="card-action">
            <a
              href="#see-details-modal"
              class="waves-effect waves-light btn modal-trigger"
              onClick={onClick}
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
