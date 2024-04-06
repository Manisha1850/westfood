import React from "react";
import Header from "../../components/Layout/Header";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
    <Header/>
      <Box
        sx={{
          ml: "14rem",
          my: "6rem",
        }}
      >
        <div>
          <Grid container spacing={16}>
            <Grid item xs={4}>
              <Link to='/homepage' style={{textDecoration:"none"}}>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  paddingLeft:"28px",
                  borderRadius: "25%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: 150,
                  height: 150,
                  backgroundColor: "pink",
                }}
              >
                
                <CardContent>
                  <p>Admin</p>
                </CardContent>
               
                
              </Card>
              </Link>
              <Link to='/donor' style={{textDecoration:"none"}}>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  paddingLeft:"28px",
                  borderRadius: "25%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  width: 150,
                  height: 150,
                  backgroundColor: "lightGreen",
                }}
              >
                <CardContent>
                  <p>Donors</p>
                </CardContent>
              </Card>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link to='/hotel' style={{textDecoration:"none"}}>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  paddingLeft:"28px",
                  borderRadius: "25%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  width: 150,
                  height: 150,
                  backgroundColor: "yellow",
                }}
              >
                <CardContent>
                  <p>Hotels</p>
                </CardContent>
              </Card>
              </Link>
              <Link to='/collection1' style={{textDecoration:"none"}}>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  paddingLeft:"16px",
                  borderRadius: "25%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  width: 150,
                  height: 150,
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <p>Donation Collected</p>
                </CardContent>
              </Card>
              </Link>

            </Grid>
            <Grid item xs={4}>
            <Link to='/pcollection' style={{textDecoration:"none"}}>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  paddingLeft:"16px",
                  borderRadius: "25%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  width: 150,
                  height: 150,
                  backgroundColor: "lavender",
                }}
              >
                <CardContent>
                  <p>Pending Collection</p>
                </CardContent>
              </Card>
              </Link>
              <Link to='/drequest' style={{textDecoration:"none"}}>
              <Card
                sx={{
                  display: "flex",
                  margin: "30px",
                  paddingLeft:"16px",
                  borderRadius: "25%",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: 3000,
                  width: 150,
                  height: 150,
                  backgroundColor: "orange",
                }}
              >
                <CardContent>
                  <p>New Donation Requests</p>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
