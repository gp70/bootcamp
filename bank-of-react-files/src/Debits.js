import React from 'react'
import MakeCard from './makeCard'
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Debits extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			debitBalance: this.props.accountBalance,
			resultlist: []
		}
	}

  onSubmit = async () =>
 {
 	let response = '';
  	let json = null
 	response = await fetch('https://moj-api.herokuapp.com/debits',{});
  	try
  	{
  		json = await response.json();
  		await this.setState({resultlist: json})
  	}
  	catch(e)
  	{
  		console.log(e)
  		document.getElementById("error").innerHTML = "Error!"
  	}
  }

  addDebit(e)
  {
  	/*
  	let add = {"description":document.getElementById("desc").value,
  			   "amount":document.getElementById("amnt").value,
  			   "date":document.getElementById("date").value}
  	this.state.resultlist.push(add);
  	console.log(this.state.resultlist);
  	let test = document.createElement("MakeCard")
  	let toadd = this.state.resultlist[this.state.resultlist.length-1]
  	test.setAttribute("data", toadd)
  	console.log(test)
  	let hm = React.createElement("MakeCard",{"description":document.getElementById("desc").value,
  			   "amount":document.getElementById("amnt").value,
  			   "date":document.getElementById("date").value})
  	ReactDOM.render(hm, document.getElementById("list"))
  	*/
  	let add = {"description":document.getElementById("desc").value,
  			   "amount":document.getElementById("amnt").value,
  			   "date":document.getElementById("date").value}
  	let newBalance = this.state.debitBalance - document.getElementById("amnt").value
  	this.setState({"debitBalance":newBalance})
  	document.getElementById("list").innerHTML += (JSON.stringify(add))
  }

  componentDidMount()
  {
  	this.onSubmit();
  }

  render()
  {

    return  (<div>
    	   	   <div>
               	   <h1>Debits</h1>
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
               	   <div>Account Balance: {this.state.debitBalance}</div>
      	   	   </div>
      	   	   <hr/>
      	   	   <input id="desc" placeholder="Item"/>
      	   	   <input id="amnt" placeholder="Amount"/>
      	   	   <input id="date" placeholder="Date"/>
      	   	   <button onClick={this.addDebit.bind(this)}>Add debit</button>
      	   	   <br/>
      	   	   <div id="error">Please enter a number in amount field.</div>
      	   	   <div>
      	   	   	   {this.state.resultlist.map(obj =>
      	   	   	   	{
      	   	   	   		return (<MakeCard data={obj}/>)
      	   	   	   	})
      	   	   	   }
      	   	   </div>
      	   	   <div  id="list">
      	   	   Added Debits: <br/>
      	   	   </div>
      	  </div>)
  }
}

export default Debits;