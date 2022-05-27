import React from 'react';
import { Button } from '@mui/material';

function ButtonExsa({title,handleClick,theme}){

  let bgColor = "#fccc37";
  let color = "#0b73b9";
  if(theme==="secundary"){
    bgColor = "#006aaf";
    color = "#fff";
  }

  return(
    <>
      <Button
        onClick={handleClick}
        sx={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
          lineHeight:1,
          fontSize: {xs: "12px",md: "20px"},
          fontWeight: "700",
          borderRadius: "25px",
          textTransform: "initial",
          letterSpacing: "1",
          minWidth: "150px",
          minHeight: "32px",
          py: {xs: "7.5px", md: "10px"},
          px: {md: "35px"},
          transition: "all .25s",
          "&:hover":{
            backgroundColor: `${bgColor}`,
            opacity: ".88",
          }
        }}>
        {title}
      </Button>
    </>
  )
}

export {ButtonExsa};