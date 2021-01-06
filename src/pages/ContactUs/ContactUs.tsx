import { TextField, makeStyles,InputLabel} from '@material-ui/core';
import React from 'react';
import { ViewMode } from '../../models';
import './ContactUs.css';
import { createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


interface Props {
  viewMode: ViewMode;
}

const useStyles = makeStyles(theme => ({
  root: {
    color:'white',
  },
  textField: {
    color: 'white',
    width: "25ch",
    padding:10,
  },
  input: { 
    color: 'orange',
  },
  label:{
    color:'white'
  }
  


}));






const ContactUs = (): JSX.Element => {
    const classes = useStyles();
    return (
      <div className="about-Us">
         <img src="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/froppa.png"/>
        <h1>About Us</h1>
       
        <img src ="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/Component+5.png"/>

        <form>
           <TextField required id="standard" label="Name" color="secondary" InputLabelProps={{className:classes.label}} className={classes.textField}   />
           <TextField required id="standard-required" label="What's up?"  color="secondary" InputLabelProps={{className:classes.label}}  className={classes.textField}/>
           <TextField required id="standard-required" label="Email" color="secondary" InputLabelProps={{className:classes.label}} className={classes.textField}/>
        </form>
        <Button
        variant="contained"
        color="secondary"
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      </div>
      
    );
  };


export default ContactUs;
