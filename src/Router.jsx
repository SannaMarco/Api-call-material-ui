import React from 'react';
import Login from './Login';
import ApiCall from './components/ApiCall';
import { BrowserRouter, Route, Switch} from 'react-router-dom';





function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/api' exact component={ApiCall} />
                <Route path='/' render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
