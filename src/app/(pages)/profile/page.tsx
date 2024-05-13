"use client"

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { Avatar, Button, Card, Divider, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabPanel } from '@mui/lab';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';

export default function Profile() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Box sx={{paddingBottom: 3}}>
          <Card sx={{p: 2, boxShadow: 0, borderRadius: '9px'}}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>Profile</div>
              <Breadcrumbs aria-label="breadcrumb" separator="›">
                <Link
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
                  href="/"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
                <Typography
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="text.primary"
                >
                  Account Profile
                </Typography>
              </Breadcrumbs>
            </Box>
          </Card>
        </Box>

        <Card sx={{p: 2, boxShadow: 0, borderRadius: '9px'}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab icon={<AccountCircleTwoToneIcon />} iconPosition="start" label="Profile" value="1"/>
                <Tab icon={<BusinessTwoToneIcon />} iconPosition="start" label="Address" value="2"/>
                <Tab icon={<HttpsTwoToneIcon />} iconPosition="start" label="Change Password" value="3"/>
              </Tabs>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined" sx={{boxShadow: 0, borderRadius: '9px'}}>
                    <Box sx={{ p: 2 }}>
                      <Typography>
                        Profile Picture
                      </Typography>
                    </Box>
                    <Divider/>
                    <Box sx={{ p: 2, pt:3, pb:3 }}>
                      <Box sx={{display: 'flex', justifyContent: 'center', pb:2}}>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://berrydashboard.io/assets/avatar-1-Dja0YEDP.png"
                          sx={{ width: 100, height: 100 }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', pb:2}}>
                        <Typography variant="caption" color="text.secondary">
                          Upload/Change Your Profile Image
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Button variant="contained" size='small' sx={{textTransform: 'none'}}>Upload Avatar</Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Card variant="outlined" sx={{p: 2, boxShadow: 0, borderRadius: '9px'}}>
                      <h1>fffffffffffffffffffff</h1>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Card>
      </div>
    </>
  )
}
