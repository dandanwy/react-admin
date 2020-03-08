import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { mainRoutes } from './routes/index'
import App from './App'
import '../public/css/reset.css'

ReactDOM.render(<Router>
    <Switch>
        <Route path="/admin" render={routeProps => <App {...routeProps} />}></Route>
      {mainRoutes.map(route => {
        return <Route key={route.path} {...route}/>
      })}
      <Redirect to="/404"></Redirect>
    </Switch>
</Router>, document.getElementById('root'));
