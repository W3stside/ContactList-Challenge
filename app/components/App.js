import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

const App = ({location: {pathname}}) => {
    return (
        <div>
            {pathname !== '/'
            ? <Link to="/" ><button className="button margin15TB">Add Contact</button></Link>
            : <Link to="ContactList" ><button className="button margin15TB">View/Edit Contacts</button></Link>}
            { Routes }
        </div>
    )
}

App.propTypes = {
    location: React.PropTypes.object
}

export default App;
