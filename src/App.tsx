import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ContactUs, MarketPlace, Transactions } from './pages';
import { ViewMode } from './models';
import { Yodlee } from './utils/Yodlee';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export interface State {
  viewMode: ViewMode;
  token: string;
}

class App extends React.PureComponent<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      viewMode: window.innerWidth < 1024 ? ViewMode.MOBILE : ViewMode.DESKTOP,
      token: '',
    };
  }
  
  async componentDidMount(): Promise<void> {
    window.addEventListener('resize', this.handleResize);
    
    const token = await Yodlee.getToken();
    this.setState({ token: token });
    console.log('App state', token);

    Yodlee.getAccounts(token);
    Yodlee.getTransactions(token);
  };

  handleResize = (): void => {
    this.setState({ viewMode: window.innerWidth < 1024 ? ViewMode.MOBILE : ViewMode.DESKTOP });
  };

  componentWillUnmount = (): void => {
    window.removeEventListener('resize', this.handleResize);
  };

  render = (): JSX.Element => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/ContactUs" component={ContactUs}>
            <ContactUs />
          </Route>
          <Route exact path="/MarketPlace" component={MarketPlace}>
            <MarketPlace />
          </Route>
          <Route exact path="/Transactions">
            <Transactions />
          </Route>
          <Route exact path="/">
            <HomePage token={this.state.token} />
          </Route>
        </Switch>
      </Router>    
    );
  };
}

export default App;
