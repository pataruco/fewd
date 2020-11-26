import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import { lessonRoutes } from './config';
import ErrorPage from '../pages/error';

export const history = createBrowserHistory();

const CustomBrowserRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);

const LessonsRouteComponents = lessonRoutes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const Routes = () => (
  <CustomBrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {LessonsRouteComponents}
      <Route path="/*" component={ErrorPage} />
    </Switch>
  </CustomBrowserRouter>
);

export default Routes;
