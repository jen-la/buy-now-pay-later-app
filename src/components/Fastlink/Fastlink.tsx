// import React from 'react';
import { useYodlee } from '../../utils/Fastlink';
import { Button } from '@material-ui/core';
import './Fastlink.css';

interface Props {
  token: string;
}

const Fastlink = (props: Props): JSX.Element => {
  const { ready, init } = useYodlee({
    containerId: 'container-fastlink',
    fastLinkOptions: {
      fastLinkURL: 'https://sandbox-node.yodlee.com.au/authenticate/anzdevexsandbox',
      token: {
        tokenType: 'AccessToken',
        tokenValue: props.token
      }
    },
  });

  return (
    <div className="fastlink">
      <div id="container-fastlink"></div>
      { ready ? <Button onClick={() => init()} variant="contained">Link your account(s)</Button> : 'Loading FastLink' }
    </div>
  );
}

export default Fastlink;
