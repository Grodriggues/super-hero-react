import React from "react";

const Footer = () => {
  const style = {
    display:'flex',
    flexDirection:"column",
    alignItems:"center"
  }
  return (
    <footer className="page-footer black" style={{padding:"2rem"}}>
      <div className="container">
        <div style={style}>
          <p>© 2020 Gabriel Rodrigues</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
