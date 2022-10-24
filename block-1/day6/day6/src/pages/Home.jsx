import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export const Home = () => {
    let location = useLocation();
    console.log(location);
  return (
    <div>
      <h1>Home</h1>
      {/* <Link to="/user">click here</Link> */}
      <Link to="/Login">click</Link>
      <Link to="/UserID">click</Link>
      <Link to="/SingUp">click</Link>
    </div>
  );
};