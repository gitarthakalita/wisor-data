import React from 'react';

import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import UserProfile from './components/user-profile/UserProfile';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={UserProfile} />
        </Switch>
    )
}

export default Routes;