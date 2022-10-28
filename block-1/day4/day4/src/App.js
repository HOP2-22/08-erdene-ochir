import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
  });
  return (
    <div>
      <div className="row">
        <p>Name</p>
        <div>
          <input
            value={inputValue.name}
            className="inp"
            type={"text"}
            onChange={(e) => {
              setInputValue({ ...inputValue, name: e.target.value });
            }}
          />
          <div className="line"></div>
        </div>
      </div>
      <div className="row">
        <p>Email</p>
        <div>
          <input
            value={inputValue.email}
            className="inp"
            onChange={(e) => {
              setInputValue({ ...inputValue, email: e.target.value });
            }}
          />
          <div className="line"></div>
        </div>
      </div>
      <button
        className="but"
        onClick={() => {
          console.log(inputValue);
        }}
      >
        <a href="https://sevensons.net/store/bones-organs">Submit</a>
      </button>
    </div>
  );
}

export default App;
