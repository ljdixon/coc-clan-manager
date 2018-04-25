import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePageContainer from './containers/HomePageContainer.jsx';
import WarPageContainer from './containers/WarPageContainer.jsx';
import MemberPageContainer from './containers/MemberPageContainer.jsx';

const App = props => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route exact path="/wars" component={WarPageContainer}/>
        <Route exact path="/members" component={MemberPageContainer}/>
      </Switch>
    </BrowserRouter>
)
export default App;