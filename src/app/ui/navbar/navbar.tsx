import { usePathname } from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import Link from 'next/link';

const drawerWidth = 240;

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const navLinks = [
  { name: "Register", href:"/signup" },
  { name: "Login", href:"/login" },
  { name: "Profile", href:"/profile" },
];

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
        {navLinks.map((link)=>{
          const isActive = pathname.startsWith(link.href);
          const mystyle = {
            color: isActive ? "red" : "",
          };
          return(
            <Link href={link.href} key={link.name} style={mystyle}>{link.name}</Link>
          )
        })}
        <Typography variant="h6" noWrap component="div">
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
