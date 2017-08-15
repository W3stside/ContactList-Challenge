/* eslint react/no-multi-comp: 0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// CONTAINERS
import AddContactContainer 	from './containers/AddContactContainer'
import ContactListContainer from './containers/ContactListContainer'

export default (
	<Switch>
		<Route exact path="/" component={AddContactContainer} />
		<Route path="/ContactList" component={ContactListContainer} />
	</Switch>
);
