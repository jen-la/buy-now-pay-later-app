import React from 'react';
import { makeStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
      padding: theme.spacing(0, 3),
      
      
    },
    card: {
        borderRadius: 5,
        minHeight: 140,
        minWidth:240,
       
        margin: 10,
        flexWrap:'wrap',
        
    },
  }),
);

const MarketGrid = (): JSX.Element => {
    const classes=useStyles()
  
    return (
      < div className="about-Us">
        <Grid 
            container
            justify="center"
            spacing={4}
        > 
            <Grid item xs ={5} sm ={1} md={3} className={classes.card}>
                <Card className={classes.card}><p className={classes.card}>Chemist WareHouse</p></Card>
                <Card className={classes.card}><p className={classes.card}>BMW</p></Card>
                <Card className={classes.card}><p className={classes.card}>IGA</p></Card>
               
            </Grid>
            <Grid item xs ={5} sm ={1}md={3} className={classes.card}>
                <Card className={classes.card}><p className={classes.card}>Telstra</p></Card>
                <Card className={classes.card}><p className={classes.card}>Apple</p></Card>
                <Card className={classes.card}><p className={classes.card}>Samsung</p></Card>
               
            </Grid>
            <Grid item xs ={5} sm ={2}md={3} className={classes.card}>
               <Card className={classes.card}><p className={classes.card}>Cartier</p></Card>
                <Card className={classes.card}><p className={classes.card}>Redbull</p></Card>
                <Card className={classes.card}><p className={classes.card}>Starbucks</p></Card>
             
            </Grid>
            
        </Grid>
      </div>
      
    );
  };
  
  export default MarketGrid;

