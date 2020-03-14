import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route, Redirect} from 'react-router-dom'
import { adminRoutes } from './routes/index';
import { isLogined } from './utils/auth'
import Frame from './components/frame/Index'

function App() {
  return ( isLogined() ?
    <Frame>
      <Switch>
        {adminRoutes.map(route => {
          return (
            route.children ? route.children.map(item => {
              return (<Route key={item.path} path={item.path} exact={item.exact}
                render={routeProps => {
                  return <item.component {...routeProps} />
                }
                } />)
            }) : <Route key={route.path} path={route.path} exact={route.exact} 
            render={routeProps => {
              return <route.component {...routeProps} />
            }}/>
          )
        })}
        {/* {adminRoutes.map(route => {
          return (route.children ? route.children.map(item => {
             <Route key={item.path} path={item.path} exact={item.exact} 
            render={routeProps => {
              return <item.component {...routeProps} />
            }}/>
          }) : <Route key={route.path} path={route.path} exact={route.exact} 
            render={routeProps => {
              return <route.component {...routeProps} />
            }}/>
        })}) */}
        <Redirect to={adminRoutes[0].path} from="/admin"></Redirect>
      </Switch>
    </Frame> : <Redirect to="/login"></Redirect>
  );
}

export default App;
