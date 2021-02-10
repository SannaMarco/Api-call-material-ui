import React, { useState } from 'react';
import Login from '../pages/login/Login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from "../pages/dashboard/Dashboard";
import MaterialTable from '../pages/material-table/MaterialTable'

export const ThemeContext = React.createContext()


function Router() {

const [darkTheme, setDarkTheme] = useState(false)

function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
}

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={darkTheme}>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/dashboard' exact component={Dashboard} />
                    <Route path='/table' exact component={MaterialTable} />
                    <Route path='/' render={() => <div>404</div>} />
                </Switch>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

export default Router;
