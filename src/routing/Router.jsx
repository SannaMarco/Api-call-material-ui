import React from 'react';
import Login from '../pages/login/Login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from "../pages/dashboard/Dashboard";
import MaterialTable from '../pages/material-table/MaterialTable'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />

                <Route path='/dashboard' exact component={Dashboard} />

                <Route path='/table' exact component={MaterialTable} />

                <Route path='/' render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
