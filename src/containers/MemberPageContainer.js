import React, { Component } from 'react';
import firebase from '../firebase.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import MemberList from '../components/MemberList.js';

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

export class MemberPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        };
    }
    componentDidMount() {
        const membersRef = firebase.database().ref('members');
        membersRef.orderByChild('active').equalTo(true).on('value', (snapshot) => {
            let members = snapshot.val();
            let newState = [];
            for (let member in members) {
                newState.push({
                    memberId: member,
                    memberName: members[member].name
                });
            }
            this.setState({
                members: newState
            });
        });
    }

    render() {
        return (
          <div>
            <Header />
            <MemberList members={this.state.members} />
          </div>
        );
      }
}

export default MemberPageContainer;