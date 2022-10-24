import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Login = () => {
    let location = useLocation();
    console.log(location);
  return (
    <div>
      <h1>Login</h1>
      <Link to="/user">click here</Link>
    </div>
  );
};