import React from 'react'
import { AppBar, Box, IconButton, Drawer,Toolbar, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css";

const Header1 = () => {
  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor: "#104E97"}}>
          <Toolbar>
            <IconButton 
            color='inherit' 
            aria-label='open drawer' 
            edge="start" 
            sx={{
              mr:2,
              display:{sm: "none"}
            }}
            
            >
            <MenuIcon/>
              
            </IconButton>
          <Typography color={"white"} variant='h6' component="div" sx={{flexGrow: 1}}>
            
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/homepage'}> HOME</Link>
                </li>
                <li>
                  <Link to={'/collection1'}> COLLECTIONS</Link>
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

export default Header1
