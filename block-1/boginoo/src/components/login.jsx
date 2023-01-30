import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "../image/link.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from 'js-cookie'
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const login = async () => {
    try {
      const res = await axios.post('https://eo-boginoo-back.onrender.com/login',{
        email: email, 
        password: password
      });
      Cookie.set("token", res.data.token);
      navigate('/');
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
              Нэвтрэх
            </Typography>
            <Box>
            <Typography sx={{}}>Email</Typography>
            <TextField
              id="outlined-basic"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="email"
              variant="outlined"
              sx={{ width: "30vw", padding: "0" }}
            />
            <Typography sx={{}}>Password</Typography>
            <TextField
              id="outlined-basic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label=".........."
              variant="outlined"
              sx={{ width: "30vw", padding: "0" }}
            />
            <Button
          variant="outlined"
          sx={{
            backgroundColor: "#02B589",
            color: "white",
            width: "183px",
            height: "44px",
            borderRadius: "20px",
            marginTop: "20px"
          }}
          onClick={() => {
            login();
          }}
        >
          login
        </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;