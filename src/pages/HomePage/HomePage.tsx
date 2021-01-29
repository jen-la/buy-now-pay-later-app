import React from 'react';
import { Fastlink, FroppaCard, SpendGrid } from '../../components';
import './HomePage.css';

interface Props {
  token: string;
  accounts: any[];
  transactions: any[];
  isLoaded: boolean;
}

// to convert to functional component if no other methods needed
class HomePage extends React.PureComponent<Props, Record<string, unknown>> {
  render = (): JSX.Element => {
    return this.props.isLoaded ? (
      <div className="home-page">
        <Fastlink token={this.props.token} />
        <h1>Hey Tim! <span role="img" aria-label="waving-hand">👋</span></h1>
        <FroppaCard accounts={this.props.accounts} />
        <h2>Spend</h2>
        <p>(last 30 days)</p>
        <SpendGrid transactions={this.props.transactions} />
      </div>
    ) : (
      <div className="home-page-loading">Loading...</div>
    );
  };
}

export default HomePage;
