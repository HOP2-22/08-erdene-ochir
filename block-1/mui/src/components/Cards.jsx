import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import data from "../cardMedia.json";
export default function MultiActionAreaCard() {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "120px",
          gap: 5,
        }}
      >
        {data.map((dt, index) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={dt.Image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {dt.CardContentHeader}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dt.CardContentBody}
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
