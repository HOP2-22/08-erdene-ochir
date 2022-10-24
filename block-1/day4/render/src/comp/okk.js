import './App.css';
import React,{ useRef } from "react";

export function Input() {
  const inputRef = useRef();
  function focus(){
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  return(
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default Input;