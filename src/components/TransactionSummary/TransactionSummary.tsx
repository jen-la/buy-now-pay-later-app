import React from 'react';
import { makeStyles, Card, List, ListItem, ListItemText } from '@material-ui/core';
// import { exampleTransactions } from '../../models/data';
import { CategorySpend } from '../../models/index';
import { aggregateCategorySpend } from '../../utils/index';
import './TransactionSummary.css';

interface Props {
  transactions: any[]; 
}

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    minHeight: 250,
    overflow: 'hidden',
    marginTop: 15,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const TransactionSummary = (props: Props): JSX.Element => {
  const classes = useStyles();
  
  // create array of filtered transactions by category (assuming key categories below) - to refactor
  // let organisedByCategory = [];
  // const entertainment = exampleTransactions.transaction.filter(trans => trans.category.toLowerCase() === 'entertainment');
  // const food = exampleTransactions.transaction.filter(trans => trans.category.toLowerCase() === 'food&drink');
  // const bills = exampleTransactions.transaction.filter(trans => trans.category.toLowerCase() === 'bills');
  // const other = exampleTransactions.transaction.filter(trans => /entertainment|food&drink|bills/i.test(trans.category) === false);
  // if (entertainment.length > 0) {
  //   organisedByCategory.push(entertainment);
  // }
  // if (food.length > 0) {
  //   organisedByCategory.push(food);
  // }
  // if (bills.length > 0) {
  //   organisedByCategory.push(bills);
  // }
  // if (other.length > 0) {
  //   organisedByCategory.push(other);
  // }

  /*  define method to calculate total spend by category 
  (update param type to Transaction[] once defined; consider adding method to utils and refactoring home/transaction pages) */
  // const getCategoryTotal = (categoryTransactions: any[]): number => {
  //   return Math.round(categoryTransactions.reduce((total, trans) => total + trans.amount.amount, 0));
  // };
  
  // filter out debit transactions
  const debitTrans = props.transactions.filter(trans => trans.baseType === 'DEBIT');
  
  // aggregate spend by category
  const totalCategorySpend: any = aggregateCategorySpend(debitTrans);
  const keysArray = Object.keys(totalCategorySpend);

  return (
    <Card className={classes.root}>
      <List>
        {/* {organisedByCategory.map(categoryArray => (
          <ListItem className={classes.listItem}>
            <ListItemText primary={categoryArray[0].category} />
            <span>${getCategoryTotal(categoryArray)}</span>
          </ListItem>       
        ))} */}
        {keysArray.map(category => (
          <ListItem className={classes.listItem}>
            <ListItemText primary={category} />
            <span>${Math.round(totalCategorySpend[category])}</span>
          </ListItem>       
        ))}
      </List>
    </Card>
  );
};

export default TransactionSummary;
