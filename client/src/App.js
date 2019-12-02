import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from "./redux/store"
import Dashboard from './pages/dashboard';
import UserPage from './pages/users';
import LoginPage from './pages/login';
import {LoginLayoutRoute, AppLayoutRoute} from './routes'
import './stylesheets/styles.scss';
// Login layout

const store = configureStore();
const App = (props) => {
    return(
        <Provider store={store}>
        <BrowserRouter>
                <Switch>
                    <LoginLayoutRoute path="/signin" component={LoginPage} />
                    <AppLayoutRoute path="/users" component={UserPage} />
                    <AppLayoutRoute path="/" component={Dashboard} />
                </Switch>
        </BrowserRouter>
        </Provider>
    )
}

export default App