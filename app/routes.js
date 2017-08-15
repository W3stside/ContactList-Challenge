/* eslint react/no-multi-comp: 0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// CONTAINERS
import AddContactContainer 	from './containers/AddContactContainer'
import ContactListContainer from './containers/ContactListContainer'
import EditContactContainer from './containers/EditContactContainer'

export default (
	<Switch>
		<Route exact path="/" component={AddContactContainer} />
		<Route path="/ContactList" component={ContactListContainer} />
		<Route path="/EditContact/:id" component={EditContactContainer} />
	</Switch>
);
