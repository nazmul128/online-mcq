import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';



const Details = () => {
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
        General Information <hr/>
      </Typography>
            <Typography sx={{fontWeight:600}} variant="h4" gutterBottom component="div">
       Md. Nazmul Hossain
      </Typography>
            <Typography sx={{fontWeight:600}} variant="h6" gutterBottom component="div">
      Mern Stack Developer
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Address:</strong>181, New Palton Lane, Azimpur, Dhaka-1205
      </Typography>
     
      <Typography variant="body1" gutterBottom>
        <strong>Phone:</strong>01840763872
      </Typography>
 
      <Typography variant="body1" gutterBottom>
        <strong>Gender:</strong>Male
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Github:</strong><Link href="https://github.com/nazmul536" target="_blank" underline="none">
        {'My Github'}
      </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Linkedin:</strong> <Link href="https://www.linkedin.com/in/nazmulhossain1996/" target="_blank" underline="none">
        {'My Linkedin'}
      </Link>
      </Typography>
     
        </div>
    );
};

export default Details;