import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import nazmul from '../../../Image/nazmul.jpg' 


const Details = () => {
    return (
        <div>
           <Card sx={{ minWidth: 250, width:'30%',textAlign:'left', margin:'auto', borderRight: 0,  boxShadow: 0 }}>
           <CardMedia
        component="img"
        height="500px"
        width='100px'
        image={nazmul}
        alt="Paella dish"
      />
      <CardContent>
      <Typography sx={{fontWeight:600, marginTop:5}} variant="h4" gutterBottom component="div">
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
        <strong>Birthday:</strong>28-02-1996
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
  
      </CardContent>
    
    </Card>
     



     {/* Skills */}
     <Card sx={{ minWidth: 250, width:'30%',textAlign:'left', margin:'auto', borderRight: 0,  boxShadow: 0 }}>
           
      <CardContent>
      <Typography sx={{fontWeight:600, marginTop:3}} variant="h4" gutterBottom component="div">
      Skills
      </Typography>
      <hr/>
      <Typography sx={{marginBottom:3}} variant="h6" gutterBottom component="div">
     <strong> Front-End:</strong> React JS, Bootstrap, React Bootstrap, JavaScript (ES6), HTML5, CSS, Material
UI, Tailwind.
      </Typography>
    

      <Typography sx={{marginBottom:3}} variant="h6" gutterBottom component="div">
     <strong>Back-End: </strong>Node JS, Express JS, MongoDB, Rest API.
      </Typography>


      <Typography sx={{marginBottom:3}} variant="h6" gutterBottom component="div">
     <strong> Additional Skills:</strong> Firebase Authentication, Git, GitHub, Netlify, Heroku, React Hook
form, React Router Dom, JSON
      </Typography>
     
      </CardContent>
    
    </Card>
     
        </div>
    );
};

export default Details;