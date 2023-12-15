import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Background from "../../assets/images/liquid-cheese.png";

const SignUp = () => {
  const [formData, setFormData] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${Background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          width: "25vw",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: "36px", fontWeight: "600" }}
        >
          Sign Up
        </Typography>
        <TextField
          label="Firstname"
          type="text"
          name="firstname"
          value={formData.firstname || ""}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Lastname"
          type="text"
          name="lastname"
          value={formData.lastname || ""}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "10px" }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
