import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ExamplePage } from './pages';
import { ViewMode } from './models';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export interface State {
  viewMode: ViewMode;
}

class App extends React.PureComponent<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      viewMode: window.innerWidth < 1024 ? ViewMode.MOBILE : ViewMode.DESKTOP,
    };
  }
  
  componentDidMount = (): void => {
    window.addEventListener('resize', this.handleResize);
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
        <Switch>
          <Route exact path="/">
            <ExamplePage viewMode={this.state.viewMode} />
            <Navbar />
          </Route>
        </Switch>
      </Router>    
    );
  };
}

export default App;
