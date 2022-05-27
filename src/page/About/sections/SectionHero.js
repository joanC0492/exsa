import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { ButtonExsa } from '../../../components/ButtonExsa';

import bgHero from '../../../assets/about/banner-video.jpg'

const styles = {
  heightHeader: 98
}

function SectionHero(){
  return(    
    <Box component="section"
      sx={{
        background: `url(${bgHero})`,
        backgroundPosition: {xs:'center 0'},
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',        
        minHeight: {md: '685px'},
        height: {md: '100vh'},
        maxHeight: {md: '100vh'},
        marginTop: `-${styles.heightHeader}px`,
        paddingTop: `${styles.heightHeader}px`,        
      }}
    >
      <Container maxWidth="xl"
        sx={{
          height: "100%",
          py: {xs:"8rem", sm: "14rem", md: "0"},
          "& .hero__container":{
            height: "100%",
          },
          "& .hero__item":{
            alignSelf: "center",
            textAlign: "center",            
          },
        }}
      >
        <Grid container className="hero__container">
          <Grid item xs={12} className="hero__item">
            <Box className="hero__button-parent">
              <ButtonExsa title="Ver video institucional" theme="secundary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export {SectionHero};