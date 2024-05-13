'use client'

import Navbar from "@/app/ui/navbar/navbar"
import Sidebar from "@/app/ui/sidebar/sidebar"
import Footer from "@/app/ui/footer/footer"
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import darkTheme from "@/app/theme/darkTheme";
import lightTheme from "@/app/theme/lightTheme";
import Toolbar from '@mui/material/Toolbar';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

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
    )

    const lightThemeChosen = useMemo(
        () =>
            createTheme({
                ...lightTheme,
            }),
        [mode],
    )
    return(
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
          <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <Navbar ColorModeContext={ColorModeContext}/>
              <Sidebar/>
              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3}}>
                <Toolbar />
                {children}
                <Footer/>
              </Box>
          </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default Layout;