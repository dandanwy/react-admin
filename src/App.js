import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import { mainRoutes, adminRoutes } from './routes/index';

function App() {
  return (
    <BrowserRouter>
      {mainRoutes.map(route => {
        return <Route key={route.path} path={route.path} component={route.component}/>
      })}
      {adminRoutes.map(route => {
        return <Route key={route.path} path={route.path} exact={route.exact} 
          render={routeProps => {
            return <route.component {...routeProps} />
          }}/>
      })}
      <Redirect to="/404"></Redirect>
    </BrowserRouter>
  );
}

export default App;
