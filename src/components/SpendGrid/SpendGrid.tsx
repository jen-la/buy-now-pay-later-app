import React from 'react';
import { makeStyles, Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core';
import { exampleTransactions, merchantIcons } from '../../models/data';
import { aggregateMerchantSpend } from '../../utils/index';
import './SpendGrid.css';

interface Props {
  transactions: any[]; 
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    borderRadius: 20,
    minHeight: 150,
    overflow: 'hidden',
  },
  cardIcon: {
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: '#363B64',
  },
});

const SpendGrid = (props: Props): JSX.Element => {
  const classes = useStyles();
  
  // filter out transactions with baseType of DEBIT
  const debitTrans = props.transactions.filter(trans => trans.baseType === 'DEBIT'); 
  console.log('debitTrans ', debitTrans);

  // calculate total spend excl. transactions with baseType of CREDIT 
  const totalSpend = debitTrans.reduce((total, trans) => total + trans.amount.amount, 0);
  // const totalSpend = exampleTransactions.transaction.reduce((total, trans) => total + trans.amount.amount, 0);

  // aggregate spend by merchant
  const totalMerchantSpend: any = aggregateMerchantSpend(debitTrans);
  const keysArray = Object.keys(totalMerchantSpend);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {keysArray.map(merchant => (
          <Grid item xs={6} sm={3} key={merchant}>
            <Card className={classes.card}>
              <CardContent>
                {merchantIcons.hasOwnProperty(merchant) ? merchantIcons[(merchant)] : <Avatar className={classes.cardIcon}>$</Avatar>}
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                  {Math.round(totalMerchantSpend[merchant] / totalSpend * 100)}%
                </Typography>
                <Typography color="textSecondary">
                  {merchant}
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
