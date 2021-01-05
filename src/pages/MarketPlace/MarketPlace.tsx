import React from 'react';
import { ViewMode } from '../../models';
import './MarketPlace.css';
import MarketGrid from '../../components/MarketGrid/MarketGrid';
interface Props {
  viewMode: ViewMode;
}

class MarketPlace extends React.PureComponent<Record<string, unknown>, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
    
      <div className="wrapper">
        
        <img src="https://myfroppabucket.s3-ap-southeast-2.amazonaws.com/froppa.png"/>

        <h1>The Marketplace</h1>
        <MarketGrid />
      </div>
      
   
    );
  };
}

export default MarketPlace;