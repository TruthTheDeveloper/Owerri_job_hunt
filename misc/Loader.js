import React from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import { DEFAULT_COLOR } from "../misc/__colors__"

const Loader = ({ small, width, height, color }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100px",
        display: "flex",
        marginTop: small ? "0px" : "40px",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color:DEFAULT_COLOR}}>Loading...</h1>
      {/* <HalfCircleSpinner style={{ width, height }} color={ color } ariaLabel="loading" /> */}
    </div>
  );
};

export default Loader;
