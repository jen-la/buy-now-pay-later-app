import React from 'react';
import { FroppaCard, SpendGrid } from '../../components';
import { Yodlee } from '../../utils/Yodlee';
import './HomePage.css';

// to convert to functional component if no state or props used
class HomePage extends React.PureComponent<Record<string, unknown>, Record<string, unknown>> {
  async componentDidMount(): Promise<void> {
    // const script = document.createElement("script");
    // script.src = "https://cdn.yodlee.com/fastlink/v3/initialize.js";
    // script.async = true;
    // document.body.appendChild(script);

    const token = await Yodlee.getToken();
    console.log('token', token);
    // this.launchFastlink(token);
    Yodlee.getAccounts(token);
    Yodlee.getTransactions(token);
  };
  
  // launchFastlink = (token: string): void => {
  //   const window: any;
  //   window.fastlink.open({
  //     fastLinkURL: 'https://sandbox-node.yodlee.com.au/authenticate/anzdevexsandbox',
  //     accessToken: `Bearer ${token}`,
  //     params: {
  //       userExperienceFlow : 'Aggregation'
  //     },
  //     onSuccess: function (data: any) {
  //       console.log(data);
  //     },
  //     onError: function (data: any) {
  //       console.log(data);
  //     },
  //     onExit: function (data: any) {
  //       console.log(data);
  //     },
  //     onEvent: function (data: any) {
  //       console.log(data);
  //     }
  //   })
  // };

  render = (): JSX.Element => {
    return (
      <div className="home-page">
        <h1>Hey Tim! <span role="img" aria-label="waving-hand">👋</span></h1>
        <FroppaCard />
        <h2>Spend</h2>
        <p>(last 30 days)</p>
        <SpendGrid />
        {/* <div id="container-fastlink">
          <input type="submit" id="btn-fastlink" value="Link an Account" onClick={Yodlee.launchFastlink()} />
        </div> */}
      </div>
    );
  };
}

export default HomePage;
