import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import LogIn from './LogIn';
import Debits from './Debits';
import Credits from './Credits';

class App extends Component
{
  constructor()
  {
    super();

    this.state =
    {
      accountBalance: 14568.27,
      currentUser:
      {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  render()
  {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const DebitComponent = () => (<Debits user={this.state.currentUser} memberSince={this.state.memberSince} accountBalance={this.state.accountBalance}/>);
    const CreditComponent = () => (<Credits user={this.state.currentUser} memberSince={this.state.memberSince} accountBalance={this.state.accountBalance}/>);
    const mockLogIn = (logInInfo) =>
    {
      const newUser = {...this.state.currentUser}
      newUser.userName = logInInfo.userName
      this.setState({currentUser: newUser})
    }

    
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitComponent}/>
            <Route exact path="/credits" render={CreditComponent}/>
          </Switch>
        </Router>
    );
  }
}
    
export default App;