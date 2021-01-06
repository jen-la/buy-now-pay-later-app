import React from 'react';
import { FroppaCard, SpendGrid } from '../../components';
import { Yodlee } from '../../utils/Yodlee';
import './HomePage.css';

// test Yodlee API calls for account and transaction data
Yodlee.getTokenInfo();

// to convert to functional component if no state or props used
class HomePage extends React.PureComponent<Record<string, unknown>, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
      <div className="home-page">
        <h1>Hey Tim! <span role="img" aria-label="waving-hand">👋</span></h1>
        <FroppaCard />
        <h2>Spend</h2>
        <p>(last 30 days)</p>
        <SpendGrid />
      </div>
    );
  };
}

export default HomePage;
