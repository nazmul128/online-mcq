import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';



const Navigation = () => {
    
    return (
        <div>
            <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
     
    >
      <Link href="/html">Html</Link>
      <Link href="/css">
        CSS
      </Link>
     
    </Box>
        </div>
    );
};

export default Navigation;