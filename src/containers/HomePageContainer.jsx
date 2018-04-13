import React, { Component } from 'react';
import HomePage from '../components/HomePage.jsx';
import Header from '../components/Header.jsx';

export class HomePageContainer extends Component {
    render() {
        return (
          <div>
            <Header />
            <HomePage />
          </div>
        );
      }
}

export default HomePageContainer;