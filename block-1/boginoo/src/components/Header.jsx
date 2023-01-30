import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "../image/link.png";
import { useNavigate } from "react-router-dom";

export const Boginoo = ({user}) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const createData = async () => {
    try {
      const res = await axios.post("https://eo-boginoo-back.onrender.com/url/create", {
        orignal: value,
        user: user,
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Link} alt="Link" />
          <Typography
            sx={{ fontFamily: "Lobster", fontSize: "56px", color: "#02B589" }}
          >
            Boginoo
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="https://www.web-huudas.mn"
            variant="outlined"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            sx={{ width: "30%", padding: "0" }}
          />
          <Button
            variant="outlined"
            height={44}
            onClick={() => {
              createData();
              // navigate(`/shortened`);
            }}
            sx={{
              backgroundColor: "#02B589",
              color: "white",
              height: "55px",
              borderRadius: "100px",
            }}
          >
            Богино
          </Button>
        </Box>
        <Box>
          {data && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lobster",
                  fontSize: "22px",
                  color: "#02B589",
                }}
              >
                Original: {data.orignal}
                <br />
                Short: {'https://eo-boginoo.web.app/' + data.short}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Boginoo;
