import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import { adminRoutes } from './routes/index';

function App() {
  return (
    <div>
      <h1>APP组件</h1>
      <BrowserRouter>
        {adminRoutes.map(route => {
          return <Route key={route.path} path={route.path} exact={route.exact} 
            render={routeProps => {
              return <route.component {...routeProps} />
            }}/>
        })}
      </BrowserRouter>
    </div>
  );
}

export default App;
