"use client"

import {
  MdAttachMoney,
  MdPeople,
} from "react-icons/md";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />

        <List>
          <ListItem>
            <Link href="/pages/profile">
              <PersonOutlineIcon/>
              Profile
            </Link>
          </ListItem>
        </List>

        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <MdPeople /> : <MdAttachMoney />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <MdPeople /> : <MdAttachMoney />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;