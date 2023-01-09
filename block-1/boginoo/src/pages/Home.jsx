import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import NavigationBar from "../components/Header";
const Home = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  return (
    <div>
      <div className="cover">
        <div className="ad">
          <div className="add">
            <div>Instant collaborations</div>
            <div>for remote teams</div>
          </div>
          <div className="addd">
            <div>All in one for your remote team chats,</div>
            <div>collaboration and track projects</div>
          </div>
          <div className="bottom">
            <input
              value={inputValue.email}
              className="input"
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
              placeholder="Email"
            />
            <button
              className="button"
              onClick={() => {
                console.log(inputValue);
              }}
            >
              <Link className="enter" to={"products"}>
                Get Early Access
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
