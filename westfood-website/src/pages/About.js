import React from 'react';
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import About1 from "../images/about.png";
import About2 from "../images/about1.png";
import "../styles/AboutStyle.css";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          mt: 8,
          mb: 2,
          textAlign: "left",
          "& h4": {
            fontWeight: "bold",
            paddingTop: "20px",
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            paddingTop: "7px",
            paddingLeft: "150px",
            height: "6px",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
              paddingTop: "5px",
            },
          },
        }}
      >
      <Typography variant="h4" paddingLeft={18} paddingBottom={1}>Our Mission</Typography>
        <p>
          We have delivered wastage food or donation to needy peoples
        </p>
        <br />
        <br />
        <br />
        
          
       
     </Box>
     <Box
     sx={{
      mb:3,
      alignContent: "center",
     }}
     >
     
     <img src={About1} alt='prersha iot' className='img1'/>
     <img src={About2} alt='prersha iot' className='img2'/>
     </Box>
    </Layout>
  )
}

export default About;
