import React from 'react';
import 'antd/dist/antd.css';
import { Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import { adminRoutes } from './routes/index';
import Frame from './components/frame/Index'

function App() {
  return (
    <Frame>
      <Switch>
        {adminRoutes.map(route => {
          return <Route key={route.path} path={route.path} exact={route.exact} 
            render={routeProps => {
              return <route.component {...routeProps} />
            }}/>
        })}
        <Redirect to={adminRoutes[0].path} from="/admin"></Redirect>
      </Switch>
    </Frame>
  );
}

export default App;
