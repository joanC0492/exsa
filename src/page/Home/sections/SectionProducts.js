import React from 'react';
import { Box, Grid, Container, Typography, Stack } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
// import required modules
import { Autoplay,FreeMode, Navigation, Thumbs,Pagination } from "swiper";

import "./swiperStyle.scss";
import "./SectionProducts.scss";

// 
import {ButtonExsa} from '../../../components/ButtonExsa';

const imgProducts = require.context('../../../assets/hero-carousel',true);

const products = [
  {
    title: 'Sistemas de iniciación',
    description: "EXSA cuenta con la planta más moderna del mundo, 100% automatizada con los más altos estándares de seguridad en la producción, tecnología amigable con el medio ambiente y un completo portafolio customizado en atender las necesidades de los clientes.",
    img: "SISTEMA_DE_INICIACION.png",
  },
  {
    title: 'Tecnología Quantex',
    description: "Innovadora tecnología dirigida principalmente a la minería de tajo abierto. Con ahorros comprobados en la adquisición, aplicación y a lo largo de toda la cadena operativa. Brinda mayor energía, amplio rango de densidades, alta resistencia al agua y es amigable con el medio ambiente.",
    img: "QUANTEX.png"
  },
  {
    title: 'Encartuchados',
    description: "El portafolio más completo de dinamitas y emulsiones encartuchadas apropiadas para diferentes condiciones de terreno.",
    img: "ENCARTUCHADOS.png"
  },
  {
    title: 'Emulsión a granel',
    description: "Emulsión oxidante inerte no detonable que se sensibiliza en el lugar de la aplicación para formar un agente de voladura. Ideal para la reducción de riesgos de manipulación y operación.",
    img: "EMULSION_GRANEL.png"
  },
  {
    title: 'ANFO',
    description: "Agente de voladura de gran versatilidad y alta potencia compuesto por una mezcla de nitrato de amonio y petróleo debidamente balanceada en oxígeno.",
    img: "ANFO.png"
  },
  {
    title: 'Semielaborados',
    description: "Materias primas utilizadas en la producción de diversos productos para minería e infraestructura.",
    img: "SEMIELABORADOS.png"
  }
];

function SectionProducts(){
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  return (
    <Box
      component="section"      
      sx={{
        backgroundColor: "#328ddf",
        minHeight: {md: '685px'},
        height: {md: '100vh'},
        maxHeight: {md: '100vh'},
      }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}      // al terminar sigue el slide inicial
        spaceBetween={0} // espacio entre sliders
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true}}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay,FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {products.map((product,index) => (
          <SwiperSlide key={'SwiperSlide-'+index}>
            <Container maxWidth="xl" sx={{
              pt: {xs:"30px",md:"0"}
            }}>
              <Grid container alignItems="center" justifyContent="center" flexDirection={{xs:"column",md:"row"}}>
                <Grid item order={{xs:"2", md: "1"}} xs={9} md={6} xl={5}>
                  <img
                    src={imgProducts(`./${product.img}`)}
                    alt={product.title}
                  />
                </Grid>
                <Grid item order={{xs:"1",md: "2"}} xs={12} md={6} ml={{xl: "5rem"}}>
                  <Box 
                    textAlign={{xs:"center",md:"right"}}
                  >
                    <Typography
                      color="#fff"
                      sx={{
                        fontSize: {xs:"34px", md:"50px", lg:"55px"},
                        fontWeight: "700",
                        lineHeight: {xs:"1",lg:".85"}
                      }}
                    >{product.title}</Typography>
                    <Typography
                      color="#fff"
                      mt="1.5rem"
                      sx={{
                        fontSize: {xs: "18px",lg:"21px"},
                        fontWeight: "400",
                      }}
                    >{product.description}</Typography>
                  </Box>
                  <Stack alignItems={{xs:"center",lg:"end"}}
                    sx={{
                      marginTop: {xs: "1rem",md: "2rem"}   
                    }}
                  >
                    <ButtonExsa 
                      title={"Ver productos"}
                    />
                  </Stack>                    
                </Grid>      
              </Grid>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Box sx={{
          display: {xs:"none",md: "block"},
        }}
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={0}
          slidesPerView={products.length} // cuantos slides se mostraran
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {products.map((product,index) => (
            <SwiperSlide key={'SwiperSlide-'+index}>
              <div>
                <div className="lineLoad">
                  <span className="lineLoad__move"></span>
                </div>
                <Box className="swiper-footer__title" component="p">{product.title}</Box>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export {SectionProducts};