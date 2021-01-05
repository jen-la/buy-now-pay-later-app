import React from 'react';
import { makeStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    card: {
        borderRadius: 5,
        minHeight: 140,
        minWidth:240,
        overflow: 'hidden',
        
    },
  }),
);

const MarketGrid = (): JSX.Element => {
    const classes=useStyles()
  
    return (
      <>
        <Grid 
            container
            spacing={4}
            direction ="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs ={5}  direction ="column"
            justify="center"
            alignItems="center"
            alignContent="center">
                <Card className={classes.card}><p>My name is slim shady</p></Card>
            </Grid>
            <Grid item xs ={5} >
                <Card className={classes.card}><p>My name is slim shady</p></Card>
            </Grid>
            <Grid item xs ={5} >
                <Card className={classes.card}><p>My name is slim shady</p></Card>
            </Grid>
            
         
           
         

        </Grid>






      </>
      
    );
  };
  
  export default MarketGrid;