import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import EditUserPage from './components/editUserPage';
import HomePage from './components/homePage';
import UserPage from './components/userPage';
import UsersListPage from './components/usersListPage';

function App() {
  return (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/users" component={UsersListPage}/>
		<Route exact path="/users/:userId?" component={UserPage}/>
		<Route path="/users/:userId?/edit" component={EditUserPage}/>
		<Redirect to="/" />
	</Switch>
  );
}

export default App;
