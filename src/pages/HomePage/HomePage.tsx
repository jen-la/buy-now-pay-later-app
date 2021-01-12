import React from 'react';
import { Fastlink, FroppaCard, SpendGrid } from '../../components';
import { Yodlee } from '../../utils/Yodlee';
import './HomePage.css';

interface Props {
  token: string;
}

class HomePage extends React.PureComponent<Props, Record<string, unknown>> {
  // async componentDidMount(): Promise<void> {
  //   const token = await Yodlee.getToken();
  //   console.log('token', token);
  //   Yodlee.getAccounts(token);
  //   Yodlee.getTransactions(token);
  // };

  componentDidMount(): void {
    console.log('token', this.props.token);
    // Yodlee.getAccounts(this.props.token);
    // Yodlee.getTransactions(this.props.token);
  };

  render = (): JSX.Element => {
    return (
      <div className="home-page">
        <Fastlink token={this.props.token} />
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
