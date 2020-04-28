import React from "react";

function Loading() {
  const style = {
    width: "300%",
    display: "block"
  };
  return (
    <div className="progress black" style={style}>
      <div className="indeterminate" style={style}></div>
    </div>
  );
}

export default Loading;
