import React from 'react';
import { DEFAULT_COLOR } from './__colors__';
import { Link } from "react-router-dom";



const  Banner = () => {
  return (
    <Link to="/" style={{ fontSize:"2rem", fontWeight:"700"}}>
        <span style={{ color: DEFAULT_COLOR }}>Owerri</span>JobHunt
    </Link>
  )
}

export default Banner