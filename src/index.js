import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Add from './components/add';
import Login from './components/login-form';
import Signup from './components/sign-up';
import { BrowserRouter as Router, Route} from 'react-router-dom' //don't need to specify localhost url in axios http address

//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';


ReactDOM.render(
	<Router>
		<div>
			<Route exact path = '/' component = {App} />
			<Route exact path = '/add' component = {Add} />
			<Route exact path = '/login' component = {Login} />
			<Route exact path = '/signup' component = {Signup} />
		</div>
	</Router>,
	document.getElementById('root')
)