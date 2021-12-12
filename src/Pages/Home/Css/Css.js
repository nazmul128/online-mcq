import React from 'react';
import Typography from '@mui/material/Typography';


const Css = () => {
    return (
        <div>
            <h1>This is a CSS question</h1>
            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>1.  CSS stands for -</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>Cascade style sheets</li>
               <li>Color and style sheets</li>
               <li>Cascading style sheets</li>
               <li>None of these</li>
           </ul>
      </Typography>
            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>2) Which of the following is the correct syntax for referring the external style sheet?</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>style src=example.css</li>
               <li>style src = "example.css</li>
               <li>stylesheet example.css stylesheet</li>
               
           </ul>
      </Typography>


            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>3) The property in CSS used to change the background color of an element is -</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>bgColour</li>
               <li>colour</li>
               <li>background-color</li>
               <li>All of the above
</li>
           </ul>
      </Typography>
           
           
            

          
        </div>
    );
};

export default Css;