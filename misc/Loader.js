import React from "react";
import { HalfCircleSpinner } from 'react-epic-spinners';

const Loader = ({ small, width, height, color }) => {
  return (
    <div style={{ width:"100%",display:"flex",marginTop:small ? "0px":"40px", height:"100%", justifyContent:"center", alignItems:"center"}}>
      <HalfCircleSpinner style={{ width, height }} color={ color } ariaLabel="loading" />
    </div>
  );
};

export default Loader;
