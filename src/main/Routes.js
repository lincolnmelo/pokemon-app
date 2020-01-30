import React , { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoadPage from '../views/loadPage/LoadPage'

const HomePage = lazy(() => import('../views/home/HomePage'));

export default props => (
  <Router>
    <Suspense fallback={<LoadPage />}>
      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Redirect from='*' to='/home' />
      </Switch>
    </Suspense>
  </Router>
)