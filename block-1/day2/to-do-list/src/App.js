import React, {useState} from "react"
import './App.css';
import { List } from "./comp";

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState("");
  const deleteAll = () => {
    setList([]);
  }
  return (
      <div className='App'>
        <h1 className="garchig">ToDo List</h1>
        <input 
        className="inp"
    type={"text"}
    value={inputValue}
    onChange={(e) => {
      setInputValue(e.target.value)}}
    />
    
    <button className="ad"
    onClick={() => {
      if (inputValue !== '') {
        setList([...list, inputValue]);
        setInputValue('');
      }
   }}>
      Add
    </button>
    <div>
    <div className="task">
      {list.map((toDo, index) => {
        return <List text={toDo} list = {list} setList={setList} index={index} key={index} />;
      })}
    </div>
    </div>
    <div >
      {list.length !== 0 && <button className="delall" onClick={deleteAll}>Delete All</button>}
    </div>
      </div>
  )
}

export default App;
