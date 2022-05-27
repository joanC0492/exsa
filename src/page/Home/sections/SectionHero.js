import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';

// 
import bgHero from '../../../assets/banner-home.jpg';
import videoHero from '../../../assets/video-home.mp4';
import {ButtonExsa} from '../../../components/ButtonExsa';

// Estilos
import "./HomePage.scss";

const styles = {
  heightHeader: 98
}

function SectionHero(){
  const [txtBtnVideoHero,setTxtBtnVideoHero] = React.useState('Ver video institucional');
  const handleClickVideo = ()=> {
    let newtxt = "";
    if(txtBtnVideoHero === 'Ver video institucional'){
      document.getElementById("video-hero").play();
      document.getElementById("video-hero").classList.add("active");
      document.getElementById("header").classList.add("active");
      newtxt = 'Pausar el video';
    }else{
      document.getElementById("video-hero").pause();
      newtxt = 'Ver video institucional';
    }
    setTxtBtnVideoHero(newtxt);
  }
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        flexGrow: 1,
        backgroundImage: `url(${bgHero})`,
        backgroundPosition: {xs:'center 0'},
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: {md: '685px'},
        height: {md: '100vh'},
        maxHeight: {md: '100vh'},
        marginTop: `-${styles.heightHeader}px`,
        paddingTop: `${styles.heightHeader}px`,
        "& .MuiContainer-root,& .MuiGrid-container":{
          height: '100%'
        }
      }}
    >
      <Box component="video"
        id="video-hero"
        src={videoHero}
        autoplay
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0",
          transition: "all .25s",
          "&.active":{
            opacity: "1",
          }
        }}
        ></Box>
      <Container maxWidth="xl" sx={{
          px: {xs:".5rem",md: "1rem"},
          position: "relative",
          zIndex: "2"
        }}>
        <Grid container spacing={0} sx={{py: {xs:"5.5rem", md:"0"}}}>
          <Grid item xs={12} sx={{alignSelf: {md:"center"}, mt: {md: `-${styles.heightHeader}px`}}}>
            <Box
              sx={{
                color:"#fff",
                textShadow:"-1px 2px 7px #000",
                textAlign:"center",
                fontSize:{xs: "34px", md:'50px'},
                lineHeight: 1,
                "& .small":{
                  fontSize:{xs: "22px", md:'35px'},
                }
              }}
            >
              <p>Soluciones exactas <span className="small">en</span></p>
              <p>fragmentación de roca <span className="small">para las industrias de</span></p>
              <p>minería e infraestructura</p>
            </Box>
              
            <Stack direction="row" justifyContent="center" spacing={1}
              sx={{
                flexWrap: "wrap",
                marginTop: {xs: "1rem",md: "4rem"}
              }}
            >
              <ButtonExsa 
                title={"Conoce más de nosotros"}
              />
              <ButtonExsa 
                title={txtBtnVideoHero}
                handleClick={() => handleClickVideo()}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export {SectionHero};