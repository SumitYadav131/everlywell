import {
  MdAttachMoney,
  MdPeople,
} from "react-icons/md";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";



// const menuItems = [
//   {
//     title: "Pages",
//     list: [
//       {
//         title: "Dashboard",
//         path: "/dashboard",
//         icon: <MdDashboard />,
//       },
//       {
//         title: "Users",
//         path: "/dashboard/users",
//         icon: <MdSupervisedUserCircle />,
//       },
//       {
//         title: "Products",
//         path: "/dashboard/products",
//         icon: <MdShoppingBag />,
//       },
//       {
//         title: "Transactions",
//         path: "/dashboard/transactions",
//         icon: <MdAttachMoney />,
//       },
//     ],
//   },
//   {
//     title: "Analytics",
//     list: [
//       {
//         title: "Revenue",
//         path: "/dashboard/revenue",
//         icon: <MdWork />,
//       },
//       {
//         title: "Reports",
//         path: "/dashboard/reports",
//         icon: <MdAnalytics />,
//       },
//       {
//         title: "Teams",
//         path: "/dashboard/teams",
//         icon: <MdPeople />,
//       },
//     ],
//   },
//   {
//     title: "User",
//     list: [
//       {
//         title: "Settings",
//         path: "/dashboard/settings",
//         icon: <MdOutlineSettings />,
//       },
//       {
//         title: "Help",
//         path: "/dashboard/help",
//         icon: <MdHelpCenter />,
//       },
//     ],
//   },
// ];
const drawerWidth = 240;

const Sidebar = async () => {
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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