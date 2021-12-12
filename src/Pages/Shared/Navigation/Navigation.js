import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { HashLink } from 'react-router-hash-link';



const Navigation = () => {
    
    return (
        <div>
            <Box
      sx={{marginY:3,
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
     
    >
      <Link  style={{textDecoration:'none', fontSize:20, fontWeight:600}} href="/details">
          General Info
          </Link>
      <Link  style={{textDecoration:'none', fontSize:20, fontWeight:600}} href="/html">
          Html
          </Link>

      <Link style={{textDecoration:'none', fontSize:20, fontWeight:600}} href="/css">
        CSS
      </Link>
     
    </Box>
        </div>
    );
};

export default Navigation;