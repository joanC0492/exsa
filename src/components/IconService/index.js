import { Box, Typography } from '@mui/material';
import React from 'react';


function IconService({img,title,text}){
  return(
    <Box textAlign="center" component="li" px="1rem"
      sx={{
        maxWidth: {xs: "33.3333%", lg: "initial"}
      }}
    >
      <figure>
        <img 
          src={img}
          alt={title}
        />
        <Typography
          sx={{
            color: "#0b72b8",
            fontWeight: "700",
            lineHeight: "15px",
            fontSize: "12.4px",
            textShadow: "-1px 2px 7px #fff"
          }}
        >{text}</Typography>
      </figure>
    </Box>
  );
}

export {IconService};