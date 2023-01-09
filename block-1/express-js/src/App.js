import React, { useEffect, useState } from "React";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("");
    };
  }, []);
  return <>dsfds</>;
}
export default App;
