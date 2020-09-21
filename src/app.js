import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import * as ROUTES from './constants/routes'
import { Home, Signin, Signup, Browse } from "./pages/index";
import { useAuthListener } from './hooks'


export default function App() {
  const { user } = useAuthListener()



  return (
    <Router>
      <Switch >
        <ProtectedRoute user={user} path={ROUTES.BROWSE} >
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router >
  )

}
