'use client'


import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Orders" />
          </ListItem>
          {/* Add more menu items */}
        </List>
      </Drawer>
      <Container className={classes.content}>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Dashboard</Typography>
          </Grid>
          {/* Add more content */}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
