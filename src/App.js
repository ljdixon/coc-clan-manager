import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePageContainer from './containers/HomePageContainer.jsx';
import WarPageContainer from './containers/WarPageContainer.jsx';
import MemberPageContainer from './containers/MemberPageContainer.jsx';
import SignUpPage from './containers/SignUp.jsx';
import SignInPage from './containers/SignIn.jsx';
import SignOutPage from './containers/SignOut.jsx';
import Header from './components/Header.jsx';

import * as routes from './constants/routes';

import withAuthentication from './components/withAuthentication';

const App = () =>
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/wars" component={WarPageContainer} />
          <Route path="/wars/:warId" />
          <Route exact path="/members" component={MemberPageContainer} />
          <Route exact path="/signin" component={SignInPage} />
          <Route component={HomePageContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>

export default withAuthentication(App);