import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

function NavBarMob({pages,anchorElNav,handleCloseNavMenu}){
  return (
    <Menu
      id="menu-appbar"
      marginThreshold={0} 
      anchorEl={anchorElNav}
      anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
      keepMounted
      transformOrigin={{vertical: 'top',horizontal: 'left',}}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
        "& .MuiMenu-paper": {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          zIndex: 9,
          left: "0 !important",
          top: "0 !important",
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "100%",
          backgroundColor: "rgba(0, 0, 0, .95)",
          borderRadius: "0"
        },
        "& .MuiList-root": {
          width: "100%"
        }
      }}
    >
      <Button
        onClick={handleCloseNavMenu}
        type="button"
        sx={{
          px: "2rem",
          py: "2rem",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex:8,                  
        }}
      >
        <CloseIcon fontSize="large" sx={{color: "#fff"}}/>
      </Button>

      {pages.map((page) => (
        <MenuItem
          key={page.name}
          onClick={handleCloseNavMenu}
          sx={{
            width:"100%",
            "& .nav-mobile__link":{
              color: "#fff",
              width:"100%",
              textAlign: "center",
              textDecoration: "none",
              "&:hover":{
                textDecoration: "underline",
              }
            }
          }}
        >
          <NavLink
            to={page.link}
            className="nav-mobile__link"
          >
            {page.name}
          </NavLink>
        </MenuItem>
      ))}
    </Menu>
  );
}

export {NavBarMob};