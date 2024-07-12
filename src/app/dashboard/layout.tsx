import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
// import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material"

const Layout = ({children}:any)=>{
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar/>
            <Sidebar/>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                    {children}
                <Footer/>
            </Box>
        </Box>
    )
}
export default Layout;