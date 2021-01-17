import React from 'react';
import { ViewMode } from '../../models';
import './LogInPage.css';

import   { SignInScreen }  from '../../components/LogIn/LogIn';
interface Props {
viewMode: ViewMode;
}

class LogInPage extends React.PureComponent<Record<string, unknown>, Record<string, unknown>> {
  render = (): JSX.Element => {
    return (
    
      <div className="login-style">
        <SignInScreen />
      </div>
    );
  };
}

export default LogInPage;



