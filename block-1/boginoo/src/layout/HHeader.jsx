import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { token } from "js-token";

export const Header = ({ user }) => {
  const navigate = useNavigate();
  console.log(user);
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {user ? (
            <div>
              <div
            >
              Welcome {user}
            </div>
            <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#02B589",
                  color: "white",
                  width: "183px",
                  height: "44px",
                  borderRadius: "20px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  navigate(`history`);
                }}
              >
                History
              </Button>
            <Button
                variant="outlined"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  width: "183px",
                  height: "44px",
                  borderRadius: "20px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  Cookies.remove("token");

                }}
              >
                Log out 
              </Button>
            </div>

          ) : (
            <>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#02B589",
                  color: "white",
                  width: "183px",
                  height: "44px",
                  borderRadius: "20px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  navigate(`login`);
                }}
              >
                login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#02B589",
                  color: "white",
                  width: "183px",
                  height: "54px",
                  borderRadius: "20px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  navigate(`create`);
                }}
              >
                Create New Account
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
