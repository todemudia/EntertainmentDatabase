import React from "react";

function Icon({ src, alt }) {
  return (
    <>
      <img className="provider__icon" src={src} alt={alt} />
    </>
  );
}

export default Icon;
