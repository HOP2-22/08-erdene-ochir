import './App.css';
import users from './users.json';
import React, { useState } from "react"

const UserCard = ({userData}) => {
  const [inputValue, setInputValue] = useState({})
  return (
    <div>
      <div className="userCard">
      <img src={userData.avatar}  />
      <div className="info">
      <div>
        {userData.username}
      </div>
      <div>{userData.email}</div>
      <div>{userData.date_of_birth}</div>
      <div>{userData.phone_number}</div>
      <div>{userData.credit_card.cc_number}</div>
      <div>{userData.id}</div>
      </div>
    </div>
    </div>
  )
}

const App = () => {
  console.log(users)
  const [output, setOutput] = useState(users);
  const search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      });
    });
  };
  return (
    <div>
      <input className="search" type="text" placeholder="search" onChange={(e) =>{
        search(e.target.value);
      }} style={StyleSheet.searchInput} />
      {
        output.map((userData, index) => {
          return <UserCard userData={userData} key={index}/>
        })
      }
    </div>
  )
}

export default App;
