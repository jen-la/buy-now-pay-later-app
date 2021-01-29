import React from 'react';
import { FroppaCard, TransactionSummary, TransactionList } from '../../components';
import { Loading } from 'react-loading-dot';
import './Transactions.css';

interface Props {
  accounts: any[];
  transactions: any[];
  isLoaded: boolean;
}

class Transactions extends React.PureComponent<Props, Record<string, unknown>> {
  render = (): JSX.Element => {
    return this.props.isLoaded ? (
      <div className="transactions-page">
        <div className="transactions-froppa-logo-container">
          <img src="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/froppa.png" alt="Froppa" />
        </div>
        <FroppaCard accounts={this.props.accounts} />
        <h2>Summary</h2>
        <TransactionSummary transactions={this.props.transactions} />
        <h2>Transactions</h2>
        <TransactionList transactions={this.props.transactions} />
      </div>
    ) : (
      <Loading background="#FFC807" />
    );
  };
}

export default Transactions;
