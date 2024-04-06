import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const Donations = () => {
  const drawerWidth = 240;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get('http://localhost:8081/donate')
      .then(res => {
        setRows(res.data); // Assuming your server returns an array of donation objects
      })
      .catch(err => console.error(err));
  }, []);

  const drawer = (
    <div>
      <Header2 />
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
        <Drawer
          variant="temporary"
          ModalProps={{ keepMounted: true }}
          sx={{
            textAlign: 'center',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            textAlign: 'center',
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
        <Typography>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#D2E7FA" }}>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Donor Name</TableCell>
                    <TableCell align="right">Food Type</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.food}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
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

export default Donations;
