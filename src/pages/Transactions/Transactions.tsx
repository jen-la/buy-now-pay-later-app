import React from 'react';
import { FroppaCard, TransactionSummary, TransactionList } from '../../components';
// import { Yodlee } from '../../utils/Yodlee';
// import { ViewMode } from '../../models';
import './Transactions.css';

interface Props {
  // viewMode: ViewMode;
}

class Transactions extends React.PureComponent<Props, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
      <div className="transactions-page">
        <div className="transactions-froppa-logo-container">
          <img src="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/froppa.png" alt="Froppa" />
        </div>
        <FroppaCard />
        {/* <h2>Summary</h2> */}
        <TransactionSummary />
        {/* <h2>Transactions</h2> */}
        <TransactionList />
      </div>
    );
  };
}

export default Transactions;
