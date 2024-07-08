'use client'

import { Box, Container, CssBaseline, Grid, ThemeProvider, Toolbar, Typography, createTheme, styled } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import darkTheme from "@/app/theme/darkTheme";
import lightTheme from "@/app/theme/lightTheme";
import { useAppSelector } from "@/app/_lib/store/hooks";
import AdminNavBar from "@/app/_layout/navbar/adminNavBar";
import Sidebar from "@/app/_layout/sidebar/sidebar";
import Footer from "@/app/_layout/footer/footer";

const drawerWidth = 240;

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Layout = ({children}:any)=>{
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const darkThemeChosen = useMemo(
    () =>
        createTheme({
          ...darkTheme
        }),
    [mode],
  );

  const lightThemeChosen = useMemo(
    () =>
        createTheme({
            ...lightTheme,
        }),
    [mode],
  );

  const open = useAppSelector(state=>state.drawer.open);

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AdminNavBar ColorModeContext={ColorModeContext}/>
          <Sidebar/>
          <Main open={open}>
            <DrawerHeader/>
            {children}
            <Footer/>
          </Main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default Layout;