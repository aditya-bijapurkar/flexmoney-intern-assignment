import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { updateBatch } from "../utils/dbFunctions";

const Success = () => {
  const location = useLocation();
  const member = location.state.user;
  const [newBatch, setNewBatch] = useState(null);
  const [updatedBatch, setUpdatedBatch] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: member.email,
      newBatch: newBatch,
    };

    const res = await updateBatch(data);
    console.log(res);
    if (res.same) {
      setUpdatedBatch(null);
      alert(`You are already in the same batch: ${newBatch}`);
    } else setUpdatedBatch(`Your batch from next month will be: ${newBatch}`);
  };

  function getDate() {
    const date = member.date.substr(0, 10);

    return `${date.substr(8, 2)}-${date.substr(5, 2)}-${date.substr(0, 4)}`;
  }

  function validity() {
    const date = member.date.substr(0, 10);
    const d = date.substr(8, 2),
      m = date.substr(5, 2),
      y = date.substr(0, 4);

    let day = parseInt(d),
      month = parseInt(m),
      year = parseInt(y);
    if (month == 12) {
      (month = 1), year++;
    } else month++;
    day = 1;

    return `${day}-${month}-${year}`;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome, {member.name}</h1>
      <h2>Subscription is valid from: {getDate()}</h2>
      <h3>Next payment date: {validity()}</h3>
      <br />
      <br />
      <h3>Current Batch: {member.batch}</h3>
      <div
        style={{
          marginTop: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form>
          <select
            required
            id="batch"
            name="batch"
            onChange={(e) => setNewBatch(e.target.value)}
            style={{ width: "150px", height: "30px", font: "16px" }}
          >
            <option hidden disabled selected value>
              change batch?
            </option>
            <option value="6 AM - 7 AM">6 AM - 7 AM</option>
            <option value="7 AM - 8 AM">7 AM - 8 AM</option>
            <option value="8 AM - 9 AM">8 AM - 9 AM</option>
            <option value="5 PM - 6 PM">5 PM - 6 PM</option>
          </select>
        </form>
        <button
          style={{ marginTop: "10px", width: "100px" }}
          onClick={handleSubmit}
        >
          Change
        </button>
      </div>
      {updatedBatch ? <h5>{updatedBatch}</h5> : null}
    </div>
  );
};

export default Success;
