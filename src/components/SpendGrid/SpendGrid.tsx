import React from 'react';
import { makeStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { exampleTransactions, merchantIcons } from '../../models/data';
import './SpendGrid.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    borderRadius: 20,
    minHeight: 150,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: '#363B64',
  },
});

const SpendGrid = (): JSX.Element => {
  const classes = useStyles();
  const totalSpend = exampleTransactions.transaction.reduce((total, trans) => total + trans.amount.amount, 0);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {exampleTransactions.transaction.map(trans => (
          <Grid item xs={6} sm={3} key={trans.id}>
            <Card className={classes.card}>
              <CardContent>
                {merchantIcons.hasOwnProperty(trans.merchant.name) ? merchantIcons[(trans.merchant.name)] : null}
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                  {Math.round(trans.amount.amount / totalSpend * 100)}%
                </Typography>
                <Typography color="textSecondary">
                  {trans.merchant.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SpendGrid;
