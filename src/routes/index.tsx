import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import { lessonRoutes, weekRoutes } from './config';
import ErrorPage from '../pages/error';
import App from '../components/app';

export const history = createBrowserHistory();

const CustomBrowserRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);

const LessonsRouteComponents = lessonRoutes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const WeekRouteComponents = weekRoutes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const Routes = () => (
  <App>
    <CustomBrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {WeekRouteComponents}
        {LessonsRouteComponents}
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </CustomBrowserRouter>
  </App>
);

export default Routes;
