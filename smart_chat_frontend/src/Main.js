import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import {Link,Outlet,useNavigate} from 'react-router-dom';

import styles from './styles/main.module.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Mainpage() {
    const [matched_users,set_matched_users]=React.useState([])
    const navigate=useNavigate()
    const users={
        1:"asim1",
        2: "asim1",
        3: "asim1",
        4: "asim1",
    }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const searchhandlr=(value)=>{
    const matchedusers=JSON.parse(JSON.stringify(matched_users))
    for(const key in users){
        if(users[key]===value){
            console.log("present key: ",key)
            matchedusers.push(key)
        }
    }
    set_matched_users(matchedusers)
  }
  const moveto_chatbox=(value)=>{
    console.log("value: ",value)
    // const data={}
    // data.key=value
    navigate("/chatbox",{state:{id:value}})
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
///////////////////rrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeeeeeettttttttttttttttttuuuuuuuuuuuuuuuurrrrrrrrrrrrrrrrrrrrrrnnnnnnnnnnnnnnnnnnn/////////
  return (        
    <div className={styles.parent}>
      <div className={styles.main}>
        <div style={{width:"30%"}}>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search onChange={(event)=>searchhandlr(event.target.value)}>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                </Box>
            </div>
            <div>
                <List style={{ width:"100%"}}>
                {matched_users.map((key,idx)=>{
                    return(
                          <ListItem onClick={(e)=>moveto_chatbox(key)}>
                            <ListItemButton >
                              <ListItemAvatar>
                              <Avatar sx={{width: 70, height:70}}>
                                  <AccountCircle style={{fontSize:80}}/>
                              </Avatar>
                              </ListItemAvatar>
                              <div style={{width:"20px"}}></div>
                              <ListItemText primaryTypographyProps={{fontSize:"24px"}} secondaryTypographyProps={{fontSize:"18px"}} primary={users[key]} secondary="text"/>
                            </ListItemButton>
                          </ListItem>  
                    )
                    
                })}
                </List>
            </div>
        </div>
        <div style={{width:"70%",height:"100%",background:"pink"}}>
          <Outlet />
        </div>
      </div> 
    </div>
  );
}
