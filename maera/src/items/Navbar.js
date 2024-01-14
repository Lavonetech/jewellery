import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  AppBar,
  Avatar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLongArrowAltUp, faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin]=useState(false);
  const cookies = document.cookie;
  const token = cookies.split(";").find((cookie) => cookie.trim().startsWith("jwt="));
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

 const handleClick = (event) => setAnchorEl(event.currentTarget);
const handleClose = () => setAnchorEl(null);
  
  const AdminLogin = async () => {
    try {
      const cookie = document.cookie;
      const tokenCookie = cookie.split(";").find((cookie) => cookie.trim().startsWith("jwt="));
  
      if (tokenCookie) {
        const tokenValue = tokenCookie.split('=')[1];  // Extract the token value
        const jwtToken = JSON.parse(atob(tokenValue.split('.')[1]));  // Decode the token
        const isAdmin = jwtToken.user.isAdmin;  // Access isAdmin property directly
  
        setIsAdmin(isAdmin);
      } else {
        setIsAdmin(false);
        console.log("You are not an admin");
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  useEffect(() => {
    AdminLogin();
  }, []);
  
  const handleScroll = () => {
    const offset = window.scrollY;
    const trigleScroll = 200;
    setIsScrolled(offset > trigleScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const Logout=()=>{
    const cookies = document.cookie;
    const jwt = cookies
      .split(";")
      .find((cookie) => cookie.trim().startsWith("jwt="));

    if (jwt) {
      // Set the 'jwt' cookie to an empty value and expire it
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    // Refresh the page
    window.location.href='/login';
  };

const drawer = (
  <Slide direction="left" in={mobileOpen} mountOnEnter unmountOnExit>
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
    <Divider />
 
    <List>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText children="HOME" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText children="ABOUT US" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <Link to="/mprocess" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText children="PROCESS" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <Link to="/ourcreation" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="OUR CREATION" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="CONTACT US" />
          </Link>
        </ListItemButton>
      </ListItem>
      {/* Add Logout, Login, and Register links */}
      {token ? (
        // User is logged in
        <>
          <ListItem disablePadding>
            <ListItemButton  onClick={Logout} >
            <FontAwesomeIcon icon={faSignOutAlt} className="me-3" />    <ListItemText children="LOGOUT" />
            
            </ListItemButton>
          </ListItem>
          {isAdmin && (
            <ListItem disablePadding>
              <ListItemButton  sx={{ color: '#1E1E1E', marginRight: '30px', backgroundColor: '#e0ceab', fontSize: '14px',width: '100px' }}>
                <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText children="DASHBOARD" />
                </Link>
              </ListItemButton>
            </ListItem>
          )}
        </>
      ) : (
        // User is not logged in
        <>
          <ListItem disablePadding>
            <ListItemButton >
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText children="REGISTER" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText children="LOGIN" />
              </Link>
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  </Box>
  </Slide>
);


// ...


  const container = () => window.document.body;
  
  return (
  
      
          
     <div >
      
    <AppBar position='fixed' sx={{backgroundColor: '#fff',marginBottom:'-3rem', }}>
      <Toolbar>
      <Box sx={{ flexGrow: 1, }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
         style={{marginLeft:'6rem'}}
        >
          <MenuIcon sx={{color:'#1E1E1E'}} />
        </IconButton>
       
        </Box>
        <div className=' d-flex align-items-center justify-content-space-between text-align-center logo'>
      <Link to="/">
        <img src="/images/png-03.png" style={{ height: '110px', width: '150px' }} />
      </Link>
    </div>
        <Box sx={{  display: { xs: 'none', sm: 'block'}}}>
         
      
           {token ?  (
            // User is logged in
             // User is logged in
          <>
         <Button  sx={{ color: '#1E1E1E', marginRight: '30px',fontSize: '14px' }} onClick={Logout} >
         <FontAwesomeIcon icon={faSignOutAlt} className="me-3" />Logout
          </Button>
             
         
          {isAdmin && <Link to="/products"><Button  sx={{ color: '#1E1E1E', marginRight: '30px', backgroundColor: '#e0ceab', fontSize: '14px',width: '150px' }} >
                Dashbord
              </Button>
              </Link> 
              }
        </>
           
          ) : (
            // User is not logged in
            <>
            <Link to="/register">
              <Button sx={{ color: '#000', marginRight: '20px',fontSize: '14px' }} onClick={() => { /* Add register logic */ }}>
              <FontAwesomeIcon icon={faUserPlus} className="me-3" />Register
              </Button>
              </Link>
             <Link to="/login"><Button  sx={{ color: '#000', marginRight: '50px', fontSize: '14px',width: '120px' }} >
             <FontAwesomeIcon icon={faSignInAlt} className="me-3" /> Login
              </Button></Link> 
            </>
          )}
         
        </Box>
       
      
      </Toolbar>
    </AppBar>
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
         
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
    <Box component="main" sx={{ p: 3 }}></Box>
  </div>
    
    
  );
};

export default Navbar;
