import React from 'react';
import { makeStyles,TextField } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDeI-xw6uluKoPRVzMNfGC1MQN5-7TPPUk",
  authDomain: "froppa-e3a33.firebaseapp.com",
  projectId: "froppa-e3a33",
  storageBucket: "froppa-e3a33.appspot.com",
  messagingSenderId: "1015299418714",
  appId: "1:1015299418714:web:6bfd8acce902ef03c30663"
};

firebase.initializeApp(firebaseConfig);


const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  
  signInSuccessUrl: '/ContactUs',
  
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};
    

export const SignInScreen = ():JSX.Element =>  {
   {
    return (
      <div>
        <img src="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/froppa.png"/>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
      padding: theme.spacing(0, 3),
      
      
    },
    card: {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      padding:50 
        
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
  }),
);



const LogIn = (): JSX.Element => {
    const classes=useStyles()
  
    return (
      < div className="about-Us">
            <form>
              <div className={classes.card}>
           <TextField required id="standard" label="Email" color="secondary" InputLabelProps={{className:classes.label}} className={classes.textField}   />
           <TextField required id="standard-required" label="Password"  color="secondary" InputLabelProps={{className:classes.label}}  className={classes.textField}/>
                 <Button 
                 variant="contained"
                 color="secondary">
                   Log In
                 </Button>
              </div>
            </form>
      </div>
      
    );
  };


  
  export default LogIn;