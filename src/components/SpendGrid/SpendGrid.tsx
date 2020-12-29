import React from 'react';
import { makeStyles, Card, CardContent, Typography, CardMedia, GridList, GridListTile } from '@material-ui/core';
// import { Transaction } from '../../models';
import './SpendGrid.css';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '90vw',
  },
  gridListTile: {
    backgroundColor: '#FFF8F8',
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: '#363B64',
  },
  // media: {
  //   minWidth: 200,
  // },
});

const SpendGrid = (): JSX.Element => {
  // example API response based on Yodlee API reference (GET request to /transactions)
  const exampleTransactionsResponse = {
    transaction: [
      {
        CONTAINER: "bank",
        id: 2829798,
        amount: {
          amount: 50.00,
          currency: "AUD"
        },
        runningBalance: {
          amount: 1450,
          currency: "AUD"
        },
        baseType: "DEBIT",
        categoryType: "EXPENSE",
        categoryId: 17,
        category: "Entertainment",
        categorySource: "SYSTEM",
        highLevelCategoryId: 10000004,
        date: "2014-07-01",
        createdDate: "2014-07-01T13:42:35Z",
        lastUpdated: "2014-07-01T13:42:35Z",
        postDate: "2014-07-01",
        description: {
          original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
          consumer: "Netflix subscription",
          simple: "XXXX"
        },
        isManual: false,
        sourceId: 258366,
        status: "POSTED",
        accountId: 836726,
        type: "PAYMENT",
        subType: "XXXX",
        merchant: {
          id: "XXXX",
          source: "FACTUAL",
          name: "Netflix",
          categoryLabel: ["XXXX"],
          address: {
            address1 :"XXXX",
            city :"XXXX",
            state :"XX",
            country :"XX",
            zip : 94112
          }
        }
      },
      {
        CONTAINER: "bank",
        id: 2829798,
        amount: {
          amount: 10.00,
          currency: "AUD"
        },
        runningBalance: {
          amount: 1440,
          currency: "AUD"
        },
        baseType: "DEBIT",
        categoryType: "EXPENSE",
        categoryId: 17,
        category: "Food&Drink",
        categorySource: "SYSTEM",
        highLevelCategoryId: 10000004,
        date: "2014-07-01",
        createdDate: "2014-07-01T13:42:35Z",
        lastUpdated: "2014-07-01T13:42:35Z",
        postDate: "2014-07-01",
        description: {
          original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
          consumer: "Coffee",
          simple: "XXXX"
        },
        isManual: false,
        sourceId: 258366,
        status: "POSTED",
        accountId: 836726,
        type: "PAYMENT",
        subType: "XXXX",
        merchant: {
          id: "XXXX",
          source: "FACTUAL",
          name: "Toby's Estate",
          categoryLabel: ["XXXX"],
          address: {
            address1 :"XXXX",
            city :"XXXX",
            state :"XX",
            country :"XX",
            zip : 94112
          }
        }
      },
      {
        CONTAINER: "bank",
        id: 2829798,
        amount: {
          amount: 400.00,
          currency: "AUD"
        },
        runningBalance: {
          amount: 1040,
          currency: "AUD"
        },
        baseType: "DEBIT",
        categoryType: "EXPENSE",
        categoryId: 17,
        category: "Entertainment",
        categorySource: "SYSTEM",
        highLevelCategoryId: 10000004,
        date: "2014-07-01",
        createdDate: "2014-07-01T13:42:35Z",
        lastUpdated: "2014-07-01T13:42:35Z",
        postDate: "2014-07-01",
        description: {
          original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
          consumer: "PS4",
          simple: "XXXX"
        },
        isManual: false,
        sourceId: 258366,
        status: "POSTED",
        accountId: 836726,
        type: "PAYMENT",
        subType: "XXXX",
        merchant: {
          id: "XXXX",
          source: "FACTUAL",
          name: "Playstation Store",
          categoryLabel: ["XXXX"],
          address: {
            address1 :"XXXX",
            city :"XXXX",
            state :"XX",
            country :"XX",
            zip : 94112
          }
        }
      },
      {
        CONTAINER: "bank",
        id: 2829798,
        amount: {
          amount: 20.00,
          currency: "AUD"
        },
        runningBalance: {
          amount: 1020,
          currency: "AUD"
        },
        baseType: "DEBIT",
        categoryType: "EXPENSE",
        categoryId: 17,
        category: "Entertainment",
        categorySource: "SYSTEM",
        highLevelCategoryId: 10000004,
        date: "2014-07-01",
        createdDate: "2014-07-01T13:42:35Z",
        lastUpdated: "2014-07-01T13:42:35Z",
        postDate: "2014-07-01",
        description: {
          original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
          consumer: "Spotify Premium subscription",
          simple: "XXXX"
        },
        isManual: false,
        sourceId: 258366,
        status: "POSTED",
        accountId: 836726,
        type: "PAYMENT",
        subType: "XXXX",
        merchant: {
          id: "XXXX",
          source: "FACTUAL",
          name: "Spotify",
          categoryLabel: ["XXXX"],
          address: {
            address1 :"XXXX",
            city :"XXXX",
            state :"XX",
            country :"XX",
            zip : 94112
          }
        }
      }
    ]
  };
  // extract data from response to match defined type for 'Transaction' under models
  // const exampleTransactions = exampleTransactionsResponse.transaction.map(trans => ({ 
  //   id: trans.id, 
  //   amount: trans.amount.amount, 
  //   merchantId: trans.merchant.id, 
  //   merchantName: trans.merchant.name
  // }));

  const classes = useStyles();
  const totalSpend = exampleTransactionsResponse.transaction.reduce((total, trans) => total + trans.amount.amount, 0);
  // const storeCard = (transaction: Transaction): JSX.Element => {
  //   const totalSpend = exampleTransactions.reduce((total, trans) => total + trans.amount, 0);
  //   return (
  //     <li key={transaction.id}>
  //       <Card className={classes.root}>
  //         <CardMedia
  //           className={classes.media}
  //           image="#"
  //           title="logo"
  //         />
  //         <CardContent>
  //           <Typography className={classes.title} color="textSecondary" gutterBottom>
  //             {Math.round(transaction.amount / totalSpend * 100)}%
  //           </Typography>
  //           <Typography className={classes.pos} color="textSecondary">
  //             {transaction.merchantName}
  //           </Typography>
  //         </CardContent>
  //       </Card>
  //     </li>
  //   );
  // };

  return (
    // <ul className="spend-grid">
    //   {exampleTransactions.map(transaction => {
    //     return storeCard(transaction);
    //   })}
    // </ul>
    <div className={classes.root}>
      <GridList cellHeight={'auto'} className={classes.gridList} cols={2} spacing={10}>
        {exampleTransactionsResponse.transaction.map(trans => (
          <GridListTile key={trans.id} className={classes.gridListTile} cols={1} rows={1}>
            <img src="#" alt="logo" />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {Math.round(trans.amount.amount / totalSpend * 100)}%
            </Typography>
            <Typography color="textSecondary">
              {trans.merchant.name}
            </Typography>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default SpendGrid;
