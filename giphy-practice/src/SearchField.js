import React from 'react';
import logo from './logo.svg';
import GifCard from './GifCard';

import {Link,BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class SearchField extends React.Component
{
constructor(props)
{
  super(props)

  this.state=
  {
    inputValue: ""
  }
}

  componentDidMount()
{
  this.forceUpdate();
}

updateInputValue(evt)
{
    this.setState({
      inputValue: evt.target.value
    });
}

newSearch()
{
  let place = document.getElementById("img")
  place.insertAdjacentHTML('afterbegin',<GifCard type="search" string={this.state.inputValue}/>)
}
  render()
  {
  return (
    <div>
      <header>
              <b>Hit ENTER in URL bar after clicking link to load new page! (I have no clue why this is needed)</b>
        <br/>
                     <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/SearchField">Search</Link>
        </Router>
        <p>
          Search
        </p>
        <b>Enter Search Term:</b><input id="input" placeholder="pikachu" value={this.state.inputValue} onChange={this.updateInputValue} onSubmit={this.newSearch().bind(this)}/>
      </header>
      <div id="img"></div>
    </div>
  );
  }
}

export default SearchField;
