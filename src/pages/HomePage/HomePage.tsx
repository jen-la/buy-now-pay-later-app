import React from 'react';
import { FroppaCard, SpendGrid } from '../../components';
import './HomePage.css';

class HomePage extends React.PureComponent<Record<string, unknown>, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
      <div className="home-page">
        <h1>Hey Jen! <span role="img" aria-label="waving-hand">👋</span></h1>
        <FroppaCard />
        <h2>Spend</h2>
        <SpendGrid />
      </div>
    );
  };
}

export default HomePage;
