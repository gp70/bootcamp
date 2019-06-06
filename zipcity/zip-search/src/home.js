import React from 'react'
import MakeCard from './makeCard'
import ErrorBoundary from './error'
class Home extends React.Component
{
  constructor(props)
  {
  	super(props);
  	this.state =
  	{
  		zipCode: '',
  		resultlist: []
  	};
  }
  handleChange(e)
  {
  	this.setState({zipCode: e.target.value})
  }
  onSubmit = async () =>
 {
 	let response = '';
  	let json = null
 	if(this.state.zipCode !== '')
  		response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipCode}`,{});
  	else
  		response = await fetch(`http://ctp-zip-api.herokuapp.com${this.state.zipCode}`,{});
  	try
  	{
  		json = await response.json();
  		await this.setState({data: json, resultlist: json})
  	}
  	catch(e)
  	{
  		console.log(e)
  		document.getElementById("error").innerHTML = "Not a valid zipcode!"
  	}
  }
  render()
  {console.log(this.state.resultlist)

    return  (<div>
    	   	   <div>
               	   <h1>Zip Code Search</h1>
      	   	   </div>
      	   	   <hr/>

      	   	       <b>Zip Code:</b><input id="input" placeholder="12345" type="zipcode" value={this.state.zipCode} onChange={this.handleChange.bind(this)}/>
				   <button onClick={this.onSubmit}>Submit</button>
      	   		   <div id="error"></div>
      	   	   <hr/>
      	   	   <div>
      	   	   	   {this.state.resultlist.map(obj =>
      	   	   	   	{
      	   	   	   		return (<MakeCard data={obj}/>)
      	   	   	   	})
      	   	   	   }
      	   	   </div>
      	  </div>)
  }
}
export default Home