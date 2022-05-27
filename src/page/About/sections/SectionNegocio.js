import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import bgNegocio from '../../../assets/about/fondo-nosotros.jpg';
import imgNegocio from '../../../assets/about/img-nosotros.jpg';

import "./SectionNegocio.scss";

const imgIcons = require.context('../../../assets/about',true);

const icons = [
  {
    name: 'Seguridad',
    img: 'icon-seguridad.png',
    subtitle: `“Tu seguridad es mi seguridad”`,
    description: `Cumplimos con las normas internacionales de seguridad y promovemos una cultura de respeto a la integridad física y mental de nuestros colaboradores. Para nosotros, la seguridad se basa en la anticipación y evaluación constante de los riesgos, así como en el análisis de las consecuencias de un evento más allá del cumplimiento de las normas.`,
  },
  {
    name: 'Foco en el Cliente',
    img: 'icon-foco-cliente.png',
    subtitle: `“Ponemos a nuestros clientes en el centro de todo lo que hacemos”`,
    description: `Integramos esfuerzos y creamos la mejor solución a las necesidades de nuestros clientes. Nos hacemos responsables por asegurar su satisfacción y cumplimos con lo que prometemos.`,
  },
  {
    name: 'Integridad',
    img: 'icon-integridad.png',
    subtitle: `“Actuar de manera honesta, solidaria y transparente”`,
    description: `Creemos en los valores éticos, el respeto hacia las personas e instituciones y la congruencia entre el decir y el hacer. Defendemos y protegemos los derechos de nuestros colaboradores, en este sentido, todos los colaboradores de EXSA S.A. se comprometen a actuar de manera justa y responsable, respetando el principio de verdad ante cada situación.`,
  },
  {
    name: 'Excelencia',
    img: 'icon-excelencia.png',
    subtitle: `“Hacer las cosas siempre mejor y con innovación”`,
    description: `La excelencia en EXSA S.A. es siempre superar las expectativas de nuestras audiencias, creando un valor sostenido para nuestros clientes, alcanzando resultados que satisfagan plenamente a todos nuestros grupos de interés y maximizando la contribución de los colaboradores a través de su desarrollo y compromiso.
    <br />
    Por ello, nuestro compromiso es mejorar continuamente y esforzarnos por comprender, anticipar y dar respuesta rápida a las inquietudes de las empresas, organizaciones o todas las personas con las que nos relacionamos.`,
  },
  {
    name: 'Compromiso',
    img: 'icon-compromiso.png',
    subtitle: `“Tomar los retos como propios”`,
    description: `Consideramos que el compromiso es la clave de nuestros logros y por ello nos aseguramos que nuestros colaboradores actúen con pasión por lo que hacen. Por otro lado, el compromiso de EXSA S.A. con sus colaboradores es cumplir todas las obligaciones personales, profesionales y organizacionales, y promover su desarrollo en estos ámbitos. En EXSA S.A. nos preocupamos por el cuidado del medio ambiente y por las comunidades que nos rodean, es por eso que buscamos, día a día, mejorar el bienestar de nuestro entorno.`,
  },
  {
    name: 'Confianza',
    img: 'icon-confianza.png',
    subtitle: `“Confío en ti y puedes conﬁar en mí”`,
    description: `Fomentamos un ambiente de conﬁanza y comunicación abierta y transparente en todo nuestro entorno y con nuestros clientes.`,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SectionNegocio(){
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="section section-negocio"
      component="section"
      sx={{
        backgroundImage: `url(${bgNegocio})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: "100vh",
      }}
    >
      <Container 
        className="section-negocio__container"
        maxWidth="xl"
      >
        <Grid 
          className="section-negocio__row"
          container
        >
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" component="h2" color="#006aaf" fontWeight="700">EXSA ES PARTE DE ORICA</Typography>
                <Box className="section-negocio__content" color="#212529" mt={".5rem"}>
                  <Typography component="p" mb="1rem">
                    ORICA is a global company, with a diverse workforce of over 13.700 people. With a supply chain that currently connects customers in more than 130 countries and is based on a series of strategically placed manufacturing assets. In addition, it has an integrated network of joint-ventures and supplier partners that guarantee the additional security of the offer.
                  </Typography>
                  <Typography component="p" mb="1rem">
                    They also have environmental, social and community commitments, since they are fundamental pillars for the company, customers and the community. Their philosophy is based on responsible business practices that will not only improve their performance, but also that of the communities in which they work.
                  </Typography>
                </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={6} pr={{lg:"2rem"}}>
            <Box color="#006aaf">
              <Typography variant="h5" fontWeight="700" component="h2">NUESTRO MODELO DE NEGOCIO</Typography>
              <Box mt={".5rem"}>
                <Typography component="p">
                  Somos la empresa peruana líder en la oferta de soluciones exactas en fragmentación de roca para las industrias de minería e infraestructura.
                </Typography>
                <Typography component="p" mt="1rem">
                  En EXSA estamos orientados a conocer y entender cada vez más el negocio de nuestros clientes, convirtiéndonos en su mejor aliado.
                </Typography>
              </Box>              
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box pt={{xs:"1rem", lg: "2.1rem"}}>
              <Typography variant="h6" component="h3" color="#006aaf" fontWeight="400">Vemos su negocio de manera integral</Typography>
              <Box color="#404040">
                <Typography component="p">
                  Estamos enfocados en capturar eficiencias tanto en la cadena operativo – productiva como en la gestión contractual, actuando con la integridad que nos caracteriza ante sociedades, gobiernos y demás grupos de interés.
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={6} pr={{lg:"2rem"}}>
            <Box textAlign="center" mt={{xs:"1rem", lg: "0"}}>
              <Box src={imgNegocio} alt="Negocio Exsa" component="img" sx={{maxWidth:"100%"}}/>
            </Box>
          </Grid>          
          <Grid item xs={12} lg={6}>
            <Box pt={{xs:"1rem",lg:"0"}}>
              <Box>
                <Typography variant="h5" component="h2" color="#006aaf" fontWeight="700">MISIÓN</Typography>
                <Typography component="p">
                  Brindar soluciones en fragmentación de roca que contribuyan al desarrollo sostenible de nuestros clientes, colaboradores, accionistas y sociedad.
                </Typography>
              </Box>
              <Box mt={"1rem"}>
                <Typography variant="h5" component="h2" color="#006aaf" fontWeight="700">VISIÓN</Typography>
                <Typography component="p">
                  Ser líderes globales en soluciones de fragmentación de roca.
                </Typography>
              </Box>
              <Box mt={"1rem"}>
                <Typography variant="h5" component="h2" color="#006aaf" fontWeight="700">VALORES</Typography>
                <Typography component="p">
                  Brindar soluciones en fragmentación de roca que contribuyan al desarrollo sostenible de nuestros clientes, colaboradores, accionistas y sociedad.
                </Typography>
              </Box>

              <Box mt={"1rem"} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value} 
                  onChange={handleChange} 
                  aria-label="basic tabs example" 
                  variant="scrollable" 
                  scrollButtons="auto"
                  sx={{
                    "& .MuiTabScrollButton-root":{
                      display: "inline-flex",                      
                    }
                  }}
                >
                  {icons.map((icon,index) => (
                    <Tab
                      sx={{fontSize: {xs: "11px", lg: "14px"} }}
                      key={index}
                      icon={<Box
                              src={imgIcons(`./${icon.img}`)}
                              alt={`${icon.name}`}
                              component="img"
                              sx={{
                                maxWidth: {xs:"72px", lg:"100%"}
                              }}
                            />}
                      {...a11yProps(`${index}`)}
                      label={`${icon.name}`}
                    />
                  ))}
                </Tabs>
              </Box>
              
              {icons.map((icon,i) => (
                <TabPanel value={value} index={i} key={i}>
                  <Typography variant='h6' component="span" sx={{display: "block",mb:"1rem"}}>{icon.subtitle}</Typography>
                  {icon.description}
                </TabPanel>
              ))}

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export {SectionNegocio};