import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import { mainRoutes } from './routes/index'
import App from './App'

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/admin" render={routeProps => <App {...routeProps} />}></Route>
      {mainRoutes.map(route => {
        return <Route key={route.path} {...route}/>
      })}
      <Redirect to="/404"></Redirect>
    </Switch>
</BrowserRouter>, document.getElementById('root'));
