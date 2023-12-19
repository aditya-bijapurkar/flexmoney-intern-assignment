import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { signinMember } from "../utils/dbFunctions";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onhandleSubmit = async (e) => {
    e.preventDefault();

    const member = {
      email: email,
      password: password,
    };

    const res = await signinMember(member);
    if (res.error) {
      alert(res.error);
    } else {
      navigate("/success", { state: res });
    }
  };

  return (
    <>
      New member?
      <button
        style={{ marginLeft: "20px", marginTop: "40px", border: "none" }}
        onClick={() => navigate("/register")}
      >
        Register
      </button>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          display="flex"
          justifyContent="center"
        >
          Sign-In to Yoga Classes
        </Typography>
        <Paper
          component="form"
          onSubmit={onhandleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            border: "1px solid #e3e3e3",
            pl: 2,
            background: "none",
            border: "none",
            paddingTop: "50px",
          }}
        >
          <Box
            style={{
              display: "flex",
              height: "10vh",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="input-span">
              <label for="email"> Enter Email: </label>
              <input
                required
                type="email"
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="input-span">
              <label for="password"> Enter Password: </label>
              <input
                required
                type="password"
                label="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </Box>
          <br />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
          >
            <Typography>
              <pre>SignIn </pre>
            </Typography>
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};

export default Signin;
