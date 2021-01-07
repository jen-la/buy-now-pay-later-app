import React from 'react';
import { makeStyles, Card, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { exampleTransactions, merchantIcons } from '../../models/data';
import './TransactionList.css';

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    minHeight: 350,
    overflow: 'hidden',
    marginTop: 15,
  },
  amount: {
    textAlign: 'right',
  },
});

const TransactionList = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <List>
        {exampleTransactions.transaction.map(trans => (
          <ListItem key={trans.id}>
            <ListItemAvatar>
              <Avatar>
                {merchantIcons.hasOwnProperty(trans.merchant.name) ? merchantIcons[(trans.merchant.name)] : trans.merchant.name[0].toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={trans.merchant.name} secondary={trans.category} />
            <ListItemText className={classes.amount} primary={`-$${trans.amount.amount.toFixed(2)}`} secondary={trans.date} />
          </ListItem>
        ))}
      </List>
    </Card>       
  );
};

export default TransactionList;
