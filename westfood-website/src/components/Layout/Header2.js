import React from 'react'
import { AppBar, Box, Drawer,Toolbar, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css";

const Header2 = () => {
  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor: "#104E97"}}>
          <Toolbar>
            
          <Typography color={"white"} variant='h6' component="div" sx={{flexGrow: 1}}>
            
            </Typography>
            
            <Box sx={{display:{xs:'none', sm:'block' , }}}>
              <ul className='navigation-menu' >
                <li>
                  <Link to={'/userpage'} > HOME</Link>
                </li>
                <li>
                  <Link to={'/about'}> ABOUT US</Link>
                </li>
                <li>
                  <Link to={'/mypro'}>  MY PROFILE</Link>
                </li>
                <li>
                  <Link to={'/'}> LOGOUT</Link>
                </li>
                
              </ul>

            </Box>
          </Toolbar>

        </AppBar>
        </Box>
    
    </>
    
  )
}

export default Header2
