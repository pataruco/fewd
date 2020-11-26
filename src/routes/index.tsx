import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import { lessonRoutes, WeekRoute } from './config';
import SlidesDeck from '../components/slides-deck';

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
    </Switch>
  </CustomBrowserRouter>
);

export default Routes;
