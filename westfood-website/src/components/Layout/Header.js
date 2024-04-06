import React , {useState} from 'react';
import { AppBar, Box, IconButton, Drawer,Toolbar, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  //handle menu click
  const handleDrawerToggle =()=>{
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer=(
   <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
    
            <Divider/>
           
              <ul className='mobile-navigation'>
                <li>
                  <Link to={'/'}> HOME</Link>
                </li>
                <li>
                  <Link to={'../collection1'}> COLLECTIONS</Link>
                </li>
                <li>
                  <Link to={'/about'}> ABOUT US</Link>
                </li>
                <li>
                  <Link to={'/login'}> LOGIN</Link>
                </li>
                <li>
                  <Link to={'/contact'}> CONTACT</Link>
                </li>
              </ul>

            

   </Box>
  )
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
            onClick={handleDrawerToggle}
            >
            <MenuIcon/>
              
            </IconButton>
          <Typography color={"white"} variant='h6' component="div" sx={{flexGrow: 1}}>
            
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}> HOME</Link>
                </li>
                <li>
                  <Link to={'/collection'}> COLLECTIONS</Link>
                </li>
                <li>
                  <Link to={'/about'}> ABOUT US</Link>
                </li>
                <li>
                  <Link to={'/login'}> LOGIN</Link>
                </li>
                <li>
                  <Link to={'/contact'}> CONTACT</Link>
                </li>
              </ul>

            </Box>
          </Toolbar>

        </AppBar>
        <Box component='nav'>
          <Drawer variant="temporary" open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display:{xs:'block',sm:'none'},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            }, 
            }}>
            {drawer}

          </Drawer>

        </Box>
        <Box >
        <Toolbar/>
        </Box>
        
      </Box>


    </>
    
    
  );
};

export default Header;

