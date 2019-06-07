import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route,NavLink,Switch,BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import SearchField from './SearchField';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route exact path="/SearchField" component={SearchField}/>
			</Switch>
	</Router>

)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
