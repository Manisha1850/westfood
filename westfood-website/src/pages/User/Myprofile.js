import React,{ useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header2 from '../../components/Layout/Header2';
import '../../styles/UserHome.css'

const Myprofile = () => {

  const drawerWidth = 240;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the admin page
    

  
  };

  const drawer = (
    <div>
      <Header2/>
      <Toolbar />
      <Divider />
      <List sx={{ textAlign: 'center', height: '100%' }}>
  {[
    { text: 'Donate', link: '/userpage' },
    { text: 'Donation Status', link: '/donation' },
    { text: 'Donations', link: '/donations' },
    { text: 'Log Out', link: '/' }
  ].map(({ text, link }) => (
    <ListItem key={link} disablePadding sx={{ justifyContent: 'center' }}>
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
        <ListItemText primary={text} sx={{ textAlign: 'center' }} />
      </Link>
    </ListItem>
  ))}
</List>

      <Divider />
    </div>
  );
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            textAlign:'center',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            textAlign:'center',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#90AFD4' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography sx={{width: 100 }}>
          <Box>
                <form className="login-form1" onSubmit={handleSubmit}>
                <label className="label1" htmlFor="name">
                  Name
                </label>
                <input
                  className="input1"
                  type="name"
                  id="name"
                  name='name'
                  
                />
                <label className="label1" htmlFor="email">
                  EmailAddress
                </label>
                <input
                className="input1"
                type="email"
                id="email"
                name='email'
                
              />


        <label className="label1" htmlFor="hotel">
                HotelName
                </label>
                <input
                className="input1"
                type="hotel"
                id="hotel"
                name='hotel'
                
              />


<label className="label1" htmlFor="address">
Address
                </label>
                <input
                className="input1"
                type="address"
                id="address"
                name='address'
                
              />
              <label className="label1" htmlFor="pass">
Password
                </label>
                <input
                className="input1"
                type="password"
                id="password"
                name='password'
               
              />

      <label className="label1" htmlFor="phone">
            Phone
                </label>
                <input
                className="input1"
                type="phone"
                id="phone"
                name='phone'
                
              />


              
              <button className="button1" type="submit">
                SUBMIT
              </button>
              
              
            
            </form>
            
          </Box>
        </Typography>
        
      </Box>
    </Box>
  )
}

export default Myprofile

 
  



