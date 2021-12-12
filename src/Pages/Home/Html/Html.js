import React from 'react';
import Typography from '@mui/material/Typography';


const Html = () => {
    return (
        <div>
            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>1. HTML stands for -</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>HighText Machine Language</li>
               <li>HyperText and links Markup Language</li>
               <li>HyperText Markup Language</li>
               <li>None of these</li>
           </ul>
      </Typography>
            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>2) Which of the following element is responsible for making the text bold in HTML?</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>pre</li>
               <li>a</li>
               <li>b</li>
               <li>br</li>
           </ul>
      </Typography>


            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>3) Which of the following tag is used for inserting the largest heading in HTML?</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>h3</li>
               <li>h1</li>
               <li>h5</li>
               <li>h6</li>
           </ul>
      </Typography>
           
           
            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>4) How to create an unordered list (a list with the list items in bullets) in HTML?</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>ul</li>
               <li>ol</li>
               <li>li</li>
               <li>i</li>
           </ul>
      </Typography>

            <Typography sx={{width:'50%', textAlign:'left'}} variant="body1" gutterBottom>
           <strong style={{marginLeft:'10px'}}>5) Which character is used to represent the closing of a tag in HTML?</strong>
           <ul style={{listStyleType:'circle'}}>
               <li>\</li>
               <li>!</li>
               <li>/</li>
               <li>.</li>
           </ul>
      </Typography>
        </div>
    );
};

export default Html;