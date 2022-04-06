import React, { useEffect } from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import { DEFAULT_COLOR } from "../misc/__colors__"

const Loader = ({ small, width, height, color }) => {
  return (
    <div
      style={{
        position: color ? null:"absolute",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100px",
        display: "flex",
        marginTop: color ? null :small ? "0px" : "40px",
        height: color ? null : "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color:color ? color :DEFAULT_COLOR}}>Loading...</h1>
    </div>
  );
};

export default Loader;
