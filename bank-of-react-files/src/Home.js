import React, { Component } from 'react';
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom';

class Home extends Component
{
  render()
  {
    return (
        <div>
          <img src="https://image.flaticon.com/icons/png/128/584/584073.png" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/">Home</Link>
          <br/>
          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/login">Login Page</Link>
          <br/>
          <Link to="/debits">Debits</Link>
          <br/>
          <Link to="/credits">Credits</Link>
          <br/><br/>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;