import { TextField, makeStyles,} from '@material-ui/core';
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
    color: 'green !important',
    width: "25ch",
    padding:10,
  },
  


}));






const ContactUs = (): JSX.Element => {
    const classes = useStyles();
    return (
      <div className="about-Us">
         <img src="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/froppa.png"/>
        <h1>About Us</h1>
       
        <img src ="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/Component+5.png"/>

        <form>
           <TextField required id="standard-required" label="Required" defaultValue="Name" className={classes.textField}/>
           <TextField required id="standard-required" label="Required" defaultValue="How can we help" className={classes.textField}/>
           <TextField required id="standard-required" label="Required" defaultValue="Email" className={classes.textField}/>
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
