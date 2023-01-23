import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "../image/link.png";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

   const create = async () => {
    if (password != verifyPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:8000',{
        email: email, 
        password: password
      });
      navigate('/login');
    } catch (e) {
      console.log(e);
      throw e;
    };
  }
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
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Typography sx={{ fontSize: "56px", color: "#02B589" }}>
              Create New Account
            </Typography>
            <Box>
            <Typography sx={{}}>Email</Typography>
            <TextField
              id="outlined-basic"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              sx={{ width: "30vw", padding: "0" }}
            />
            <Typography sx={{}}>Password</Typography>
            <TextField
              id="outlined-basic"
              label=".........."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              sx={{ width: "30vw", padding: "0" }}
            />
            <Typography sx={{}}>Verify Password</Typography>
            <TextField
              id="outlined-basic"
              label=".........."
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              variant="outlined"
              sx={{ width: "30vw", padding: "0" }}
            />
            <Button onClick={create}>
              Create Account
            </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Create;