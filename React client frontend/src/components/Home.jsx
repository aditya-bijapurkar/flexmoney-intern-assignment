import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => navigate("/register");
  const handleSignin = () => navigate("/signin");

  return (
    <div
      style={{
        backgroundImage: `url(${"../../public/yogabackground.jpeg"})`,
        height: "65vh",
        display: "flex",
        alignItems: "center",
        padding: "100px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>New Member?</h2>
        <button
          style={{ fontSize: "16px", width: "100px" }}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
      <div>
        <h1>Join Yoga Classes at 500₹/Month !!</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Already a member?</h2>
        <button
          style={{ fontSize: "16px", width: "100px" }}
          onClick={handleSignin}
        >
          Sign-In
        </button>
      </div>
    </div>
  );
};

export default Home;
