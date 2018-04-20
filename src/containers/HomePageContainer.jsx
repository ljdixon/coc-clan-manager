import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import HomePage from '../components/HomePage.jsx';
import Header from '../components/Header.jsx';

export class HomePageContainer extends Component {
    render() {
        return (
          <div>
            <Header />
            <Container text style={{ marginTop: '5em' }}>
              <HomePage />
            </Container>
          </div>
        );
      }
}

export default HomePageContainer;