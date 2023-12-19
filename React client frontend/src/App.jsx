import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, Navbar, Register, Signin, Success } from "./components";

const App = () => (
  <>
    <Box className="app" sx={{ minHeight: "100vh" }}>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Box>
  </>
);

export default App;
