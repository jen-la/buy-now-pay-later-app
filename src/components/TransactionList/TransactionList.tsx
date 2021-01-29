import React from 'react';
import { makeStyles, Card, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { exampleTransactions, merchantIcons } from '../../models/data';
import { reverseDate } from '../../utils/index';
import './TransactionList.css';

interface Props {
  transactions: any[]; 
}

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
  debit: {
    color: 'red',
  },
  credit: {
    color: 'green',
  },
});

const TransactionList = (props: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <List>
        {/* {exampleTransactions.transaction.map(trans => ( */}
        {props.transactions.map(trans => (
          <ListItem key={trans.id}>
            <ListItemAvatar>
              <Avatar>
                {trans.merchant && trans.merchant.hasOwnProperty('name') && merchantIcons.hasOwnProperty(trans.merchant.name) ? merchantIcons[(trans.merchant.name)] 
                  : trans.merchant && trans.merchant.hasOwnProperty('name') ? trans.merchant.name[0].toUpperCase() 
                  : '$'
                }
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={trans.merchant && trans.merchant.hasOwnProperty('name') ? trans.merchant.name : '---'} secondary={trans.category} />
            <ListItemText 
              className={trans.baseType === 'DEBIT' ? `${classes.amount} ${classes.debit}` : `${classes.amount} ${classes.credit}`}
              primary={trans.baseType === 'DEBIT' ? `-$${trans.amount.amount.toFixed(2)}` : `$${trans.amount.amount.toFixed(2)}`}
              secondary={reverseDate(trans.date)} 
            />
          </ListItem>
        ))}
      </List>
    </Card>       
  );
};

export default TransactionList;
