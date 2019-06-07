import React from 'react';
import logo from './logo.svg';
import GifCard from './GifCard';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';

class App extends React.Component
{
componentDidMount()
{
  this.forceUpdate();
}
  render(){return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GIF Searching Interface
        </p>
        <b>Hit ENTER in URL bar after clicking link to load new page! (I have no clue why this is needed)</b>
        <br/>
        <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/SearchField">Search</Link>
        </Router>
        <br/>
        <p>Trending</p>
        <GifCard type="trending" getnum="0"/>
        <GifCard type="trending" getnum="1"/>
        <GifCard type="trending" getnum="2"/>
        <GifCard type="trending" getnum="3"/>
        <GifCard type="trending" getnum="4"/>
        <GifCard type="trending" getnum="5"/>
        <GifCard type="trending" getnum="6"/>
      </header>
    </div>
  );}
}

export default App;
