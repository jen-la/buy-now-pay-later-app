// import React from 'react';
import { useYodlee } from '../../utils/Fastlink';
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
      { ready ? <button onClick={() => init()}>Link your account(s)</button> : 'Loading...' }
    </div>
  );
}

export default Fastlink;
