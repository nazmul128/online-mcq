import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



const Css = () => {
    return (
        <div>
            <Typography sx={{ marginTop:5, width:'80%', display:'inline-block', fontSize:22, textAlign:'left'}}variant="body1" gutterBottom>
            <FormControl component="fieldset">
      <strong>1.Which CSS property defines the radius of an element's corners?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="disabled"  control={<Radio />} label="Border Corner" />
        <FormControlLabel value="male" control={<Radio />} label="Border-radius" />
        <FormControlLabel value="other" control={<Radio />} label="corner" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'30%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>

            <FormControl component="fieldset">
      <strong>2.What are the RGBA color values?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="RGBA color values are combination of four colors" />
        <FormControlLabel value="male" control={<Radio />} label="RGBA color values are an extension of RGB color values with background image" />
        <FormControlLabel value="other" control={<Radio />} label="RGBA color values are an extension of RGB color values with an alpha channel
" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'35%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>
      
      
            <FormControl component="fieldset">
      <strong>3.Which of the following specifies the red color with opacity?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="rgba(255, 0, 0, 255)" />
        <FormControlLabel value="male" control={<Radio />} label="rgba(255, 255, 255, 0.3)" />
        <FormControlLabel value="other" control={<Radio />} label="rgba(255, 0, 0, 0.3)
" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'35%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>
    
            <FormControl component="fieldset">
      <strong>4.Which is correct CSS statement to define blue background color with opacity?</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="background-color: rgba(0, 0, 255, 0.3)" />
        <FormControlLabel value="male" control={<Radio />} label="background-color: rgba(0, 0, 255, 255)" />
        <FormControlLabel value="other" control={<Radio />} label="background-color: rgba(0, 255, 255, 0.3)" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'28%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/>
    


            <FormControl component="fieldset">
      <strong>5.HSL color value stands for-</strong>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Hue, Saturation and Lightness" />
        <FormControlLabel value="male" control={<Radio />} label="Hue, Solid and Lightness" />
        <FormControlLabel value="other" control={<Radio />} label="Hex, Solid and Lightness
" />
      </RadioGroup>
      <Button style={{marginTop:4, width:'80%'}} variant="contained">Show Answer</Button>
    </FormControl><br/><br/> 
      </Typography>
           

        </div>
    );
};

export default Css;