import React from "react";

function LoadingImage() {
  const styleImageLoading = {
    height: "300px",
    width: "300px",
    display:"flex",
    alignItems:"center",
    
  };

  return (
    <div style={styleImageLoading}>
      <div class="preloader-wrapper big active" style={{margin:"auto"}}>
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingImage;
