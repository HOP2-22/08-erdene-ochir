import axios from "axios";
import React, {useState} from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Ap.css';
import { List } from "./comp";

function History() {
  const {email}= useParams()
  const [list, setList] = useState([])
  useEffect( ()=> {
    const fetchData = async() => {
      const data = await axios.get(`http://localhost:8000/url/history/${email}`)
      // console.log(data)
      setList(data.data)
    };
    fetchData()
    },[])
    console.log(list)

  return (
      <div className='App'>
    <div className="task">
      {list.map((history, index) => {
        return <List history={history} key={index} />;
      })}
    </div>
      </div>
  )
}

export default History;