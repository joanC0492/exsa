import { Container, Grid, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


import {ListServices} from '../../../components/ListServices';
import {IconService} from '../../../components/IconService';

// bg
import bgService from '../../../assets/home-servicios-fondo2.jpg';
import bgMinero from '../../../assets/home-servicios-hombre.png';

const imgServices = require.context('../../../assets/icons',true);
const services = [
  {
    title: 'sive',
    text: 'Servicio Integral de Voladura EXSA (SIVE)',
    img: 'servicio-icono-3.png',
  },
  {
    title: 'ctve',
    text: 'Centro Tecnológico de Voladura EXSA (CTVE)',
    img: 'servicio-icono-5.png',
  },
  {
    title: 'servicio tajoa',
    text: 'Asistencia técnica para minería de cielo abierto',
    img: 'servicio-icono-2.png',
  },
  {
    title: 'voladura',
    text: 'Servicio de mezclado de agentes de voladura para minería de cielo abierto',
    img: 'servicio-icono-4.png',
  },
  {
    title: 'asistencia',
    text: 'Asistencia técnica para Minería subterránea.',
    img: 'servicio-icono-1.png',
  },        
];

function SectionServices(){
  return(
    <Box
      component="section"
      sx={{
        paddingTop: {xs:"1.5rem",lg:"7rem"},
        paddingBottom: {xs: "7rem"},
        backgroundImage: `url(${bgMinero}), url(${bgService})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: {xs: "220px ,cover", md:"490px ,cover", xl: "577px ,cover"},
        backgroundPosition: {xs: "calc(100% + 60px) 100%,center center", lg: "bottom right, center center"},
        minHeight: {md: '685px'},
        height: {md: '100vh'},
        maxHeight: {md: '100vh'},
      }}
    >
      <Container maxwidth="xl">
        <Grid container>
          <Grid item xs={12} lg={8}>
            <Box
              sx={{                  
                color:"#0b72b8",
                textAlign:"center",
                fontSize:{xs: "34px", md:'50px'},
                lineHeight: 1,
                "& .small":{
                  fontSize:{xs: "22px", md:'35px'},
                }
              }}
            >
              <p><span className="small">Garantizamos la</span> continuidad</p>
              <p><span className="small">de las</span> operaciones</p>
              <p><span className="small">gracias a nuestros servicios</span></p>
            </Box>

            <ListServices>
              {services.map(({title,text,img},index) => (
                <IconService 
                  key={index}
                  title={title}
                  text={text}
                  img={imgServices(`./${img}`)}
                />
              ))}
            </ListServices>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export {SectionServices};