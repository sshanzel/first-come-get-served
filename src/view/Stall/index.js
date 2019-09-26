import React from "react";
import toi from "../../assets/toi.jpg";

export const Stall = () => {
  return (
    <React.Fragment>
      <h1>Taste of Ilocos</h1>
      <img
        style={{
          width: "100%",
          height: 360,
          objectFit: "cover",
          marginLeft: -30,
          paddingRight: 30
        }}
        src={toi}
        alt="Taste of Ilocos"
      />
      <br />
      aasdadas
    </React.Fragment>
  );
};

export default Stall;
