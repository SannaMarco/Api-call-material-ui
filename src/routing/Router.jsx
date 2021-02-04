import React from 'react';
import Login from '../pages/login/Login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ApiCall from "../pages/api-call/ApiCall";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/api' exact component={ApiCall} />
                {/*<Route path='/dashboard' exact component={Dashboard} />
                <Route path='/table' exact component={TablePage} />*/}
                <Route path='/' render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
