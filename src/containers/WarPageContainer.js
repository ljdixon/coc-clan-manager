import React, { Component } from 'react';
import firebase from '../firebase.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import WarList from '../components/WarList.js';

const Header = () => (
    <header>
        <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/wars'>Wars</Link></li>
            <li><Link to='/members'>Members</Link></li>
        </ul>
        </nav>
    </header>
)

export class WarPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wars: []
        };
    }
    componentDidMount() {
        const warsRef = firebase.database().ref('wars');
        warsRef.on('value', (snapshot) => {
            let wars = snapshot.val();
            let newState = [];
            for (let war in wars) {
                newState.push({
                    warId: war,
                    warOpponent: wars[war].opponent
                });
            }
            this.setState({
                wars: newState
            });
        });
    }

    render() {
        return (
          <div>
            <Header />
            <WarList wars={this.state.wars} />
          </div>
        );
      }
}

export default WarPageContainer;