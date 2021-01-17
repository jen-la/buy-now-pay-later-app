import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ContactUs, MarketPlace, Transactions } from './pages';
import { ViewMode } from './models';
import { Yodlee } from './utils/Yodlee';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LogInPage from './pages/LogIn/LogInPage';

export interface State {
  viewMode: ViewMode;
  token: string;
  accounts: any[];
  transactions: any[];
}

class App extends React.PureComponent<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      viewMode: window.innerWidth < 1024 ? ViewMode.MOBILE : ViewMode.DESKTOP,
      token: '',
      accounts: [],
      transactions: [],
    };
  }
  
  async componentDidMount(): Promise<void> {
    window.addEventListener('resize', this.handleResize);
    
    // generate token and get account balance and transaction data 
    const token = await Yodlee.getToken();
    this.setState({ token: token });
    console.log('App state: token ', token);

    const accounts = await Yodlee.getAccounts(token);
    this.setState({ accounts: accounts.account });
    console.log('App state: accounts ', accounts.account);

    const transactions = await Yodlee.getTransactions(token);
    this.setState({ transactions: transactions.transaction });
    console.log('App state: trans ', transactions.transaction );
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
          <Route exact path="/LogInPage" component={LogInPage}>
            <LogInPage />
          </Route>
          <Route exact path="/MarketPlace" component={MarketPlace}>
            <MarketPlace />
          </Route>
          <Route exact path="/Transactions">
            <Transactions accounts={this.state.accounts} transactions={this.state.transactions} />
          </Route>
          <Route exact path="/">
            <HomePage token={this.state.token} accounts={this.state.accounts} transactions={this.state.transactions} />
          </Route>
        </Switch>
      </Router>    
    );
  };
}

export default App;
