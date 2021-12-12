import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Html = () => {
    return (
        <div>
            <Typography sx={{ marginTop:5, width:'80%', display:'inline-block', fontSize:22, textAlign:'left'}}variant="body1" gutterBottom>
            <FormControl component="fieldset">
      <strong>1. HTML stands for -</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="disabled"  control={<Radio />} label="HighText Machine Language" />
        <FormControlLabel value="male" control={<Radio />} label="HyperText and links Markup Language" />
        <FormControlLabel value="other" control={<Radio />} label="HyperText Markup Language" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'50%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>

            <FormControl component="fieldset">
      <strong>2.ALL HTML tags are enclosed in what?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="# and #" />
        <FormControlLabel value="male" control={<Radio />} label="? and !" />
        <FormControlLabel value="other" control={<Radio />} label="< and >" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'40%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>
      
      
            <FormControl component="fieldset">
      <strong>3.To add a plain color background to your web page, use which of the following?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label=" <body bgcolor= “36,24,35”>" />
        <FormControlLabel value="male" control={<Radio />} label="<body color= “# FF000”>" />
        <FormControlLabel value="other" control={<Radio />} label="<body bgcolor= “# FF000”>" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'20%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>
    
            <FormControl component="fieldset">
      <strong>4.Which of the following tag is used for inserting the largest heading in HTML?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="<h6>" />
        <FormControlLabel value="male" control={<Radio />} label="<h1>" />
        <FormControlLabel value="other" control={<Radio />} label="<h2>" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'20%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>
    


            <FormControl component="fieldset">
      <strong>5.Which character is used to represent the closing of a tag in HTML?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="!" />
        <FormControlLabel value="male" control={<Radio />} label="/" />
        <FormControlLabel value="other" control={<Radio />} label="." />
      </RadioGroup>
      <Button style={{marginTop:4, width:'20%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/> 
      </Typography>
           

        </div>
    );
};

export default Html;