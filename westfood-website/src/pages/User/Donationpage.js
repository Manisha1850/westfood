import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header2 from '../../components/Layout/Header2';

const Donationpage = () => {

  const drawerWidth = 240;

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
  function createData(id, Donorname, Foodtype, Quantity,Status, Date) {
    return { id, Donorname, Foodtype,  Quantity,Status, Date };
  }

  const rows = [
    createData('1', 'Manisha', 'm@gmail.com', 24546638, 'Rajkot','prince'),
    
  ];

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
        <Typography >
          <Box>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor:"#D2E7FA"}}>
            <TableCell>Id</TableCell>
            <TableCell align="right" style={{marginInlineStart:"0px"}}>Donor Name</TableCell>
            <TableCell align="right">Food Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.createData}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
          </Box>
        </Typography>
        
      </Box>
    </Box>
  )
}

export default Donationpage
 
  



