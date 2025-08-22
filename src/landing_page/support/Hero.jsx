import React from "react";
import { Button, TextField } from "@mui/material";

const Hero = () => {
  return (
    <div className="hero bg-light py-4 shadow-sm">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Support Portal</h2>
        <TextField
          fullWidth
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          variant="outlined"
          className="search-bar"
        />
        <Button variant="contained" color="primary" className="mt-3 mx-3">
          My tickets
        </Button>
      </div>
    </div>
  );
};

export default Hero;

