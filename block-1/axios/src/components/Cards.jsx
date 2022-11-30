import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { Box, Container } from "@mui/system";
import data from "../cardMedia.json";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function MultiActionAreaCard() {
  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/post",
    headers: { "app-id": "636e0d6642c1f665f684f489" },
  });
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get("/");
        setPosts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <Box sx={{ marginBottom: "100px" }}>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "120px",
          gap: 5,
        }}
      >
        {posts?.map((dt, index) => (
          <Card
            sx={{ width: 345 }}
            key={index}
            onClick={() => {
              navigate(`/blog/${dt.id}`);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={dt?.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {dt?.tags.join(" ")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dt?.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
