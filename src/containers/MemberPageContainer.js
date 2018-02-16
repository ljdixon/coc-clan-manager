import React, { Component } from 'react';
import firebase from '../firebase.js';
import 'firebase/firestore';
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
        const membersRef = firebase.firestore().collection('members');
        membersRef.where("active", "==", true).onSnapshot((snapshot) => {
            let newState = [];
            snapshot.forEach((member) => {
                newState.push({
                    memberId: member.id,
                    memberName: member.data().name,
                    memberActive: member.data().active
                });
                this.setState({
                    members: newState
                });
            })
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