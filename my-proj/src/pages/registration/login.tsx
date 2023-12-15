import React, { useState } from "react";
import { Box, Typography, TextField, Button, Divider, makeStyles, Link, Stack, Avatar } from "@mui/material";
import Login_Background from "../../assets/images/radiant-gradient.png";
import Gmail from "../../assets/images/gmail.png";
import Insta from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import Background from "../../assets/images/liquid-cheese.png";
import { stringAvatar } from "../../utils";

const Login = () => {
  const [formData, setFormData] = useState<any>({
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
        <Avatar
          {...stringAvatar(formData.email.toUpperCase())}
          sx={{ width: 56, height: 56, mb: 1 }}
        />
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: "36px", fontWeight: "600" }}
        >
          Login
        </Typography>
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
          sx={{ marginBottom: '12px' }}
        />
        <Link href="#" style={{float:'right'}}>Forgot Password?</Link>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "10px" , marginBottom: '20px'}}
        >
          LogIn
        </Button>

        <Typography
          variant='body1'
          gutterBottom
        >
          Or Sign Up Using
        </Typography>

        <Stack direction="row" spacing={2} >
            <Avatar alt="Facebook" src={Facebook} sx={{ margin: '10px' }} style= {{borderRadius: '15%' }}/>
            <Avatar alt="Instagram" src={Insta} sx={{ margin: '10px' }} style= {{borderRadius: '15%' }} />
            <Avatar alt="Gmail" src={Gmail} sx={{ margin: '10px' }} style={{borderRadius: '15%' }}/>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
