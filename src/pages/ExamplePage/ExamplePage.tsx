import React from 'react';
import { ExampleComponent } from '../../components';
import { ViewMode } from '../../models';
import './ExamplePage.css';

interface Props {
  viewMode: ViewMode;
}

class ExamplePage extends React.PureComponent<Props, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
      <div className="example-page">
        {this.props.viewMode === ViewMode.MOBILE ? 'mobile-view' : 'desktop-view'}
        <ExampleComponent />
      </div>
    );
  };
}

export default ExamplePage;
