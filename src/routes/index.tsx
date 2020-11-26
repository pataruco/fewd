import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import routes, { WeekRoute } from './config';
import SlidesDeck from '../components/slides-deck';

export const history = createBrowserHistory();

const CustomBrowserRouter: React.FC = ({ children }) => (
  <Router history={history}>{children}</Router>
);

const LessonsRoutes = () =>
  routes.map((route) => (
    <Route path={`week-${route.week}/lesson-1`}>
      <SlidesDeck slidesDeckName={route.lessons[1]} />
    </Route>
  ));

const LessonRoute: React.FC<WeekRoute> = (route) => (
  <>
    <Route path={`week-${route.week}/lesson-1`}>
      <SlidesDeck slidesDeckName={route.lessons[1]} />
    </Route>
    <Route path={`week-${route.week}/lesson-2`}>
      <SlidesDeck slidesDeckName={route.lessons[2]} />
    </Route>
  </>
);

const Routes = () => (
  <CustomBrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {routes.map((route) => (
        <LessonRoute route={route} />
      ))}
    </Switch>
  </CustomBrowserRouter>
);

export default Routes;
