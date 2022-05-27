import { Box } from '@mui/material';
import React from 'react';

function ListServices({children}){
  return(
    <Box component="ul"
      sx={{
        mt: "2rem",
        listStyle: "none",
        pl: "0",
        display: "flex",
        flexWrap: {xs:"wrap",lg: "nowrap"}
      }}
    >
      {children}
    </Box>
  );
}

export {ListServices};