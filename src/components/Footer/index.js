import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';


const footerLists = [
  {
    title: 'Servicio al cliente',
    list: [
      'Código de ética y conducta',
      'Declaración de privacidad términos y condiciones'
    ]
  },
  {
    title: 'Proveedores',
    list: [
      'Política de compras',
      'Homologación de proveedores',
      'Administración de proveedores',
      'Gestión de proveedores'
    ]
  },
  {
    title:'Contáctenos en:',
    listIcon: [
      'fa-brands fa-facebook-f',
      'fa-brands fa-twitter',
      'fa-brands fa-youtube',
      'fa-brands fa-linkedin-in'
    ]
  }
];

function Footer(){
  return(
    <Box
      component="footer"
      sx={{
        backgroundColor: "#187bc3",
        pt: {xs: "calc(50px + -1rem)", lg:"50px"},
        px: {xs: "1rem", md:"0"}
      }}
    >
      <Grid 
        container
        justifyContent="center"
      >
        {footerLists.map(({title,list,listIcon},i) => (
          <Grid 
            item 
            key={`${title}-${i}`}
            sx={{
              flex: {xs: "0 0 100%", md: "0 0 33.3333%",lg: "initial"}
            }}
          >
            <Box
              sx={{
                maxWidth: {xs: "100%", lg:"317px"},
                px:{md:"2rem"}
              }}
            >
              <Typography component="h3"
                sx={{
                  mt: {xs:"1rem",lg: "0"},
                  color: "#fff",
                  fontWeight: "bold",
                  position: "relative",
                  "&::before":{
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    height: "1.5px",
                    backgroundColor: "#fff",
                    left: "0",
                    bottom: "-1.5px"
                  }
                }}              
              >{title}</Typography>
              <List
                disablePadding
                sx={{
                  color: "#fff",
                  display: `${listIcon ? 'flex' : 'block'}`,
                  maxWidth: `${listIcon ? '129px' : 'initial'}`,
                  marginTop: "1rem"
                }}
              >
                {
                  (listIcon?.map((item,j) => (
                    <ListItem disablePadding key={`${item}-${j}`}>
                      <i className={item}></i>
                    </ListItem>
                  )))
                }
                {(list?.map((item,j) => (
                  <ListItem disablePadding key={`${item}-${j}`}>
                    <ListItemText primary={item} />
                  </ListItem>
                )))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography component="p" textAlign="center" pt="50px" pb="15px">
        <Box href="https://joancochachi.com/miperfil/" target="_blank" rel="noopener noreferrer" color="#fff"  component="a">
          &copy; {new Date().getFullYear()} Developed by Joan Cochachi
        </Box>
      </Typography>
    </Box>
  );
}

export {Footer};