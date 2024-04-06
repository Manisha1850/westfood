import React from 'react'
import Layout from './../components/Layout/Layout'
import { Box } from '@mui/material'
import Con1 from "../images/contact.png"



const Contect = () => {
  return (
    <Layout>
      <Box
     sx={{
      mb:4,
     }}
     >
     <center>
     <img src={Con1} alt='prersha iot' style={{ width: '30rem', height: '30rem',padding:'50px'}}/>
     </center>
     
     </Box>
    </Layout>
  )
}

export default Contect
