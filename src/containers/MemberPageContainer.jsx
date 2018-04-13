import React, { Component } from 'react';
import firebase from '../firebase.js';
import 'firebase/firestore';
import MemberList from '../components/MemberList.jsx';
import Header from '../components/Header.jsx';

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