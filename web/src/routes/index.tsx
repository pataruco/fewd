import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import {
  lessonRoutes,
  weekRoutes,
  FinalProjectRoute,
  BonusLessonsRoute,
  bonusLessonRoutes,
} from './config';
import ErrorPage from '../pages/404';
import '../styles/site-index.scss';
import About from '../pages/about';

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

const BonusLessonsComponents = bonusLessonRoutes.map(
  ({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ),
);

const { path: finalProjectRoute, component: FinalProject } = FinalProjectRoute;
const { path: bonusLessonsRoute, component: BonusLessons } = BonusLessonsRoute;

const Routes = () => (
  <CustomBrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path={finalProjectRoute} component={FinalProject} />
      <Route exact path={bonusLessonsRoute} component={BonusLessons} />
      {WeekRouteComponents}
      {BonusLessonsComponents}
      {LessonsRouteComponents}
      <Route path="/*" component={ErrorPage} />
    </Switch>
  </CustomBrowserRouter>
);

export default Routes;
