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
import { Link } from '@mui/material';

import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header1 from '../../components/Layout/Header1';

const PendingCollection = () => {

  const drawerWidth = 240;

  const drawer = (
    <div>
      <Header1/>
      <Toolbar />
      <Divider />
      <List sx={{ textAlign: 'center', height: '100%' }}>
  {[
    { text: 'Admin', link: '/homepage' },
    { text: 'Donors', link: '/donor' },
    { text: 'Hotels', link: '/hotel' },
    { text: 'Pending Collections', link: '/pcollection' },
    { text: 'Donation Request', link: '/drequest' }
  ].map(({ text, link }) => (
    <ListItem key={text} disablePadding sx={{ justifyContent: 'center' }}>
      <Link href={link} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
        <ListItemText primary={text} sx={{ textAlign: 'center' }} />
      </Link>
    </ListItem>
  ))}
</List>


      <Divider />
    </div>
  );
  function createData(id, HotelName, Food, Phone, Address, Quantity) {
    return { id, HotelName, Food, Phone, Address, Quantity};
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
            <TableCell align="right" style={{marginInlineStart:"20px"}}>HotelName</TableCell>
            <TableCell align="right">Food</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Quantity</TableCell>
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

export default PendingCollection
 
  



