import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { registerNewMember } from "../utils/dbFunctions";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [date, setDate] = useState(null);
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(null);

  const onhandleSubmit = async (e) => {
    e.preventDefault();

    if (age < 18 || age > 65)
      alert("Classes are available only for ages 18-65");
    else {
      const member = {
        name: name,
        age: age,
        date: date,
        batch: batch,
        email: email,
        password: password,
      };

      const res = await registerNewMember(member);
      console.log(res);

      setName(null),
        setAge(null),
        setDate(null),
        setBatch(null),
        setEmail(null),
        setPassword(null);

      setMessage(
        "Registered successfully! You will be navigated to sign-in page in 5 seconds..."
      );

      setTimeout(() => {
        navigate("/signin");
      }, "5000");
    }
  };

  return message ? (
    <h2 style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      {message}
    </h2>
  ) : (
    <>
      Already a member?
      <button
        style={{
          marginLeft: "20px",
          marginTop: "40px",
          border: "none",
        }}
        onClick={() => navigate("/signin")}
      >
        Sign In
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
          Register to Yoga Classes
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
              height: "30vh",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="input-span">
              <label for="name"> Enter Name: </label>
              <input
                required
                type="text"
                label="name"
                onChange={(e) => setName(e.target.value)}
              />
            </span>
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
            <span className="input-span">
              <label for="batch">Choose a batch:</label>
              <select
                required
                id="batch"
                name="batch"
                onChange={(e) => setBatch(e.target.value)}
              >
                <option hidden disabled selected value>
                  -- select a batch --
                </option>
                <option value="6 AM - 7 AM">6 AM - 7 AM</option>
                <option value="7 AM - 8 AM">7 AM - 8 AM</option>
                <option value="8 AM - 9 AM">8 AM - 9 AM</option>
                <option value="5 PM - 6 PM">5 PM - 6 PM</option>
              </select>
            </span>
            <span className="input-span">
              <label for="age">Enter Age: </label>
              <input
                required
                type="number"
                id="age"
                name="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </span>
            <span className="input-span">
              <label for="date">Joining Month: </label>
              <input
                required
                type="month"
                id="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
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
              <pre>Register </pre>
            </Typography>
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};

export default Home;
