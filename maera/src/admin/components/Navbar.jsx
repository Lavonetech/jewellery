
import React,{useState} from 'react';
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
  } from "@mui/icons-material";
import { AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
    CssBaseline,} from '@mui/material';
    
import {useDispatch} from 'react-redux';
import FlexBetween from './FlexBetween';
import { setMode } from '../state';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';


const Navbar =({isSidebarOpen, setIsSidebarOpen})=>{
const dispatch=useDispatch();
const theme =useTheme();

const [anchorEl, setAnchorEl] = useState(null);

const isOpen = Boolean(anchorEl);
const handleClick = (event) => setAnchorEl(event.currentTarget);
const handleClose = () => setAnchorEl(null);
    return(
        <>
      
      <CssBaseline />
        <Sidebar/>
        <AppBar sx={{
            position:'static',
            background:'none',
            boxShadow:'none',
           
              
        }}>
         <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>

        </FlexBetween>
        <Button><Link to='/createproduct'sx={{fontWeight:'600'}} className='full-wdth-btn create-btn'>Create Product</Link></Button>
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

        
        </FlexBetween>
      </Toolbar>
        </AppBar>
        
        
        </>
    )
}

export default Navbar;