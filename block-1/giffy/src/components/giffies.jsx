import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import { Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "../loading.json";

export default function StandardImageList() {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //   const itemData = async () => {
  //     const res = await axios.get(
  //       `https://api.giphy.com/v1/gifs/search?api_key=WgUwxzrVNkOpanXTJa6cUGW94VQqfaLO&q=${input}&limit=25&offset=0&rating=g&lang=en`
  //     );
  //     setData(res.data.data);
  //   };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    const resInterceptor = (response) => {
      console.log("res", response);
      return response.data.data;
    };
    const interceptor = axios.interceptors.response.use(resInterceptor);
    return () => axios.interceptors.response.eject(interceptor);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=WgUwxzrVNkOpanXTJa6cUGW94VQqfaLO&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`
        );
        console.log(res);
        setData(res);
        setLoading(false);
        setErrorMessage("");
      } catch (error) {
        console.log(error.message);
        setErrorMessage(error.message);
      }
    };
    fetchData();
  }, [inputValue]);

  return (
    <Box
      className="mn"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          id="standard-basic"
          label="write here dumbass"
          variant="standard"
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setInputValue(input);
            }
          }}
        />

        <Button variant="outlined" onClick={() => setInputValue(input)}>
          Search
        </Button>
      </Box>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
      <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {data?.map((item) => {
          return (
            <ImageListItem key={item.images.original.url}>
              <img
                src={`${item.images.original.url}`}
                srcSet={`${item.images.original.url}`}
                alt={item?.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}
