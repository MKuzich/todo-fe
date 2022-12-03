import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import HomePageContainer from '../pages/home';
import TodoPageContainer from '../pages/todo';
import LoginPageContainer from '../pages/login';
import RegisterPageContainer from '../pages/register';
import WelcomePageContainer from '../pages/welcome';
import ChangePageContainer from '../pages/change';
import { PrivateRoute } from '../common/components/PrivateRoute';
import { PublicRoute } from '../common/components/PublicRoute';

export const MainRouter = () => (
  <Router basename="todo-fe">
    <Routes>
      <Route
        element={
          <PublicRoute restricted={false}>
            <ChangePageContainer />
          </PublicRoute>
        }
        path={APP_KEYS.ROUTER_KEYS.CHANGE}
      />
      <Route
        element={
          <PublicRoute>
            <WelcomePageContainer />
          </PublicRoute>
        }
        path={APP_KEYS.ROUTER_KEYS.WELCOME}
      />
      <Route
        element={
          <PublicRoute>
            <RegisterPageContainer />
          </PublicRoute>
        }
        path={APP_KEYS.ROUTER_KEYS.REGISTER}
      />
      <Route
        element={
          <PublicRoute>
            <LoginPageContainer />
          </PublicRoute>
        }
        path={APP_KEYS.ROUTER_KEYS.LOGIN}
      />
      <Route
        element={
          <PrivateRoute>
            <HomePageContainer />
          </PrivateRoute>
        }
        path={APP_KEYS.ROUTER_KEYS.ROOT}
      />
      <Route
        element={
          <PrivateRoute>
            <TodoPageContainer />
          </PrivateRoute>
        }
        path={APP_KEYS.ROUTER_KEYS.TODO}
      />
    </Routes>
  </Router>
);
