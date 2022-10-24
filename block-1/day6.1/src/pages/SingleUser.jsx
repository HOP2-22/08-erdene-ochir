import React from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";
export const SingleUser = () => {
  const { userID } = useParams();
  const userData = users.filter((user) => user.username == userID)[0];
  return (
    <div>
      <div className="userCard">
        <img src={userData.avatar} />
        <div className="info">
          <div>{userData.username}</div>
          <div>{userData.email}</div>
          <div>{userData.date_of_birth}</div>
          <div>{userData.phone_number}</div>
          <div>{userData.credit_card.cc_number}</div>
          <div>{userData.id}</div>
        </div>
      </div>
    </div>
  );
};
