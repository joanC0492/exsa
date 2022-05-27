import React from 'react';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './NavBarPc.scss';
function NavBarPc({pages}){

  const handleCloseNavMenu = ()=>{
    console.log("event");
  }
  return(
    <Box
      component="nav"
      sx={{
        flexGrow: 0, 
        display: { xs: 'none', md: 'flex' },
        mr:{ md:'2rem', lg: '6rem' , xl: '8rem'},
        "& .nav-header__link":{
          textDecoration: "none"
        }
      }}
    >
      {pages.map((page,index) => (
        <NavLink
          key={page.name}
          to={page.link}
          className={({isActive})=> (isActive ? 'nav-header__link active' : 'nav-header__link')}
        >
          <Button            
            onClick={handleCloseNavMenu}
            sx={{
              fontWeight: `400`,
              color: 'white',
              display: 'block',
              px: "1rem",
              textDecoration: 'none',
              "&::before":{
                content: '""',
                position: "absolute",
                top: "10.5px",
                right: "0",
                backgroundColor: `${index === pages.length-1 ? 'transparent' : '#fff'}`,
                height: "15px",
                width: "2px",
              },
              ".nav-header__link.active &::after":{
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "10px",
                backgroundColor: "#fccc37",
                height: "2px",
                width: "calc(100% + -20px)",
              }
            }}
          >          
            {page.name}
          </Button>
        </NavLink>
      ))}
    </Box>
  );
}

export {NavBarPc};