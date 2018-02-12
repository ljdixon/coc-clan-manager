import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/FormContainer.js';
import WarPageContainer from './containers/WarPageContainer.js';
import MemberPageContainer from './containers/MemberPageContainer.js';

const App = props => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FormContainer}/>
        <Route exact path="/wars" component={WarPageContainer}/>
        <Route exact path="/members" component={MemberPageContainer}/>
      </Switch>
    </BrowserRouter>
)
export default App;