import React from 'react';

// Material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { NavBarPc } from '../NavBar/NavBarPc.js';
import { NavBarMob } from '../NavBar/NavBarMob.js';
// Mi estilo
import './Header.scss';

// Recursos estaticos
import logo from '../../assets/logos/logo_final_orica_white.png';
import iconEnglish from '../../assets/icons/ingles.png';

const pages = [
  {
    name: 'NOSOTROS',
    link: '/about',
  },
  {
    name: 'PRODUCTOS',
    link: '/',
  },
  {
    name: 'SERVICIOS',
    link: '/',
  },
  {
    name: 'CAPACITACIÓN',
    link: '/',
  },
  {
    name: 'NOTICIAS',
    link: '/',
  },
  {
    name: 'CONTACTO',
    link: '/',
  }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar id="header" position="relative" 
      sx={{
        height:{lg: '98px'},
        zIndex:"2",
        backgroundColor: "transparent",
        "&.active":{
          boxShadow: "none"
        }
      }}
    >
      <Container maxWidth="xl" sx={{backgroundColor: {xs: '#000', md:'transparent'}}}>
        <Box
          sx={{
            margin:0,
            display:"flex",
            flexGrow: 1,
            justifyContent: "end"
          }}
        >
          <Button sx={{padding: 0}}>
            <img src={iconEnglish} alt="English" />
          </Button>
        </Box>
        <Toolbar disableGutters>
          <Box className="logo__figure" sx={{mr:"auto"}} component="figure">
            <NavLink 
              to="/"              
              className="logo__link">
              <img 
                src={logo}
                alt="logo" 
                className="logo__img"
              />
            </NavLink>
          </Box>

          {/* Nav Mobile */}
          <Box sx={{flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Nav Mob */}
            <NavBarMob
              pages={pages}
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Box>
          
          {/* Nav Pc */}
          <NavBarPc
            pages={pages}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export {Header};