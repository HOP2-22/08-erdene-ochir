import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

export const Shortened = () => {
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://eo-boginoo-back.onrender.com/url/${id}`);
        window.location.replace(data.orignal)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>Loading...</div>
  );
};

export default Shortened;