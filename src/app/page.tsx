'use client'

import Navbar from "@/app/ui/navbar/navbar"
import Sidebar from "@/app/ui/sidebar/sidebar"
// import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "@/app/ui/footer/footer"
import { Box, CssBaseline, IconButton, ThemeProvider, Typography, createTheme, useTheme } from "@mui/material";
import { Suspense, createContext, useContext, useMemo, useState } from "react";
import darkTheme from "@/app/theme/darkTheme";
import lightTheme from "@/app/theme/lightTheme";


const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Home = ({children}:any)=>{
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
        <><h1>Home Page</h1></>
    )
}
export default Home;