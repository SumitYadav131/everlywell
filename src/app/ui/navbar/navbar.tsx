"use client";

import { usePathname } from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

const drawerWidth = 240;

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const Navbar = (props: HeaderProps) => {
  const {ColorModeContext} = props;
  const pathname = usePathname();

  return (
    <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <ThemeToggleButton ColorModeContext={ColorModeContext}/>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
