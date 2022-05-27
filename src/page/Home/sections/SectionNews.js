import { Box, Container, Grid} from '@mui/material';
import React from 'react';

import bgNews from '../../../assets/home-noticias.jpg';
import publication from '../../../assets/banner-accionistas-inversion.png';
import portfolio from '../../../assets/imagen.png';

function SectionNews(){
  return(
    <Box component="section"
      sx={{
        paddingTop: {xs:"3.5rem",md:"3.5rem", lg:"7rem"},
        paddingBottom: {xs: "3.5rem",md:"3.5rem", lg:"7rem"},
        background: `url(${bgNews}) center/cover no-repeat`,
        minHeight: {lg: '685px'},        
        maxHeight: {lg: '100vh'},
      }}
    >
      <Container maxWidth="xl">
        <Grid 
          container
          justifyContent="center"
          spacing={2}
        >
          <Grid item xs={12} lg={11}>
            <Box
              sx={{
                color:"#006aaf",
                textAlign:{xs: "center",lg:"left"},
                fontSize:{xs: "34px", md:'50px'},
                lineHeight: 1,
                "& .small":{                  
                  color:"#4b4b4b",
                  fontSize:{xs: "22px", md:'35px'},
                }
              }}
            >
              <p><span className="small">Últimas</span> NOTICIAS</p>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                position: "relative",
                "& img":{
                  maxWidth: "100%",
                },
                "& p":{
                  py: {xs:".15rem", lg:".5rem"},
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor:"rgba(0,0,0,.75)"
                }
              }}
            >
              <figure>
                <img 
                  src={publication}
                  alt="publication"
                />
              </figure>
              <p>EXSA</p>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                position: "relative",
                "& img":{
                  maxWidth: "100%",
                },
                "& p":{
                  py: ".5rem",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor:"rgba(0,0,0,.75)"
                }
              }}
            >
              <img 
                src={portfolio}
                alt="portfolio"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export {SectionNews};