import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { ViewMode } from '../../models';
import './ExamplePage.css';

interface Props {
  viewMode: ViewMode;
}

class Transactions extends React.PureComponent<Props, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
      <div className="example-page">
        {this.props.viewMode === ViewMode.MOBILE ? 'mobile-view' : 'desktop-view'}
        <Navbar />
      </div>
    );
  };
}

export default Transactions;
