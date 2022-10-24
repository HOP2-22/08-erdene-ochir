import './App.css';
import React,{ useState, useEffect, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  return (
    <div>
      <div className="row" >
        <p>Name</p>
        <div>
          <input ref={nameRef} value={inputValue.name} className="inp" type={"text"} onChange={(e) => {
            setInputValue({ ...inputValue, name: e.target.value });
          }} />
          <div className="line"></div>
        </div>
      </div>
      <div className="row" >
        <p>Email</p>
        <div>
          <input ref={emailRef} value={inputValue.email} className="inp" onChange={(e) => {
            setInputValue({ ...inputValue, email: e.target.value });
          }} />
          <div className="line"></div>
        </div>
      </div>
      <div className="row" >
        <p>phone number</p>
        <div>
          <input ref={phoneRef} value={inputValue.phone} className="inp" onChange={(e) => {
            setInputValue({ ...inputValue, phone: e.target.value });
          }} />
          <div className="line"></div>
        </div>
      </div>
      <button className="but" onClick={() => {
        if (inputValue.name === ""){ 
          nameRef.current.focus();
        } else if (inputValue.email === ""){ 
          emailRef.current.focus();
        } else if (inputValue.phone === ""){ 
          phoneRef.current.focus(); 
        } else {
          console.log(inputValue)
        } 
      }} >Submit</button>
    </div>
  )
}

export default App;
