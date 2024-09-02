import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        textAlign: 'center', 
        py: 3, // padding-top e padding-bottom
        
        color: 'white', 
        width: '100%', 
        fontSize: '0.9rem', 
        backgroundColor:'#000000'
      }}
    >
      <Typography variant="body2">
        2024 Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
