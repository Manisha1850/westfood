import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "left", bgcolor: "#104E97", color: "white", p: 3 }}>
        <Box
          sx={{
            my: 2.5,
            "& svg": {
              fontSize: "50px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#D2E7FA",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
            "& Link":{
              color: "white",
              textDecoration: "none",
            },
            "& b": {
              fontSize: "30px"
            },
          }}
        >
         

          <Grid container spacing={16}>
            <Grid item xs={4}>
            <b>Prersha Foundation</b>
            <br/>
            <br/>
            <p textAlign="left">Address: RK University, Tramba, Rajkot</p>
          <p>Contact No.: 6687382637</p>
          <p>Email Add.: prersha@gmail.com</p>
            </Grid>
            <Grid item xs={4}>
            <b>Important Links</b>
            <br/>
            <br/>
            <Link style={{color: 'white',textDecoration: "none"}} to="/" >Home</Link>
            <br/>
            <br/>
            <Link style={{color: 'white',textDecoration: "none"}} to="/donate">Donations</Link>
            <br/>
            <br/>
            <Link style={{color: 'white',textDecoration: "none"}} to="/about">About us</Link>            
            <br/>
            <br/>
            <Link style={{color: 'white',textDecoration: "none"}} to="/contact">Contact us</Link>

            </Grid>
            <Grid item xs={4}>
            <b>Social Media</b>
            <br/>
            <br/>
             {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
          <br/><br/>            
          <p>copyright @ 2024 | All rights reserved</p>

            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:550px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy;
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
