import React from 'react'
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      city: '',
      resultlist: []
    };
  }
  handleChange(e)
  {
    this.setState({city: e.target.value})
  }
  onSubmit = async () =>
 {
  let response = '';
  let json = null
  let error = false
  if(this.state.city !== '')
  {
    this.state.city = this.state.city.toUpperCase()
      response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${this.state.city}`,{});
  }
    else
      response = await fetch(`http://ctp-zip-api.herokuapp.com${this.state.city}`,{});
    try
    {
      json = await response.json();
      await this.setState({resultlist: json})
    }
    catch(e)
    {
      console.log(e)
      document.getElementById("error").innerHTML = "Not a valid city!"
      error = true;
    }
    if (!error)
      document.getElementById("error").innerHTML = ""
  }
  render()
  {

    return  (<div>
             <div>
                   <h1>City Search</h1>
               </div>
               <hr/>

                   <b>City:</b><input id="input" placeholder="12345" type="zipcode" value={this.state.city} onChange={this.handleChange.bind(this)}/>
                   <button onClick={this.onSubmit}>Submit</button>
                   <div id="error"></div>
               <hr/>
               <div>
                   {this.state.resultlist.map(obj =>
                    {
                      return (<h4>{obj}</h4>)
                    })
                   }
               </div>
          </div>)
  }
}
export default App