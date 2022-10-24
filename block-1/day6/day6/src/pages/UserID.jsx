import React from "react";
import { useParams } from "react-router-dom";
export const UserID = () => {
  const params = useParams();
  return (
    <div>
      <h1>User ID</h1>
      <p>{params.userID}</p>
    </div>
  );
};