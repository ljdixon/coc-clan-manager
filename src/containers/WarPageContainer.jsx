import React, { Component } from 'react';
import firebase from '../firebase.js';
import WarList from '../components/WarList.jsx';
import Header from '../components/Header.jsx';

export class WarPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wars: [],
            modalIsOpen: false
        };
    }

    openModal(gif) {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    componentDidMount() {
        const warsRef = firebase.firestore().collection('wars');
        warsRef.onSnapshot((snapshot) => {
            let newState = [];
            snapshot.forEach((war) => {
                let score = "(" + war.data().stars_for + " - " + war.data().stars_against + ")";
                let result = '';
                if(war.data().stars_for > war.data().stars_against) { 
                    result = "won"; 
                } else if(war.data().stars_for < war.data().stars_against){
                    result = "lost";
                } else if(war.data().stars_for == war.data().stars_against){
                    if(war.data().damage_for > war.data().damage_against) {
                        result = "won";
                    } else if(war.data().damage_for < war.data().damage_against) {
                        result = "lost";
                    }
                }
                newState.push({
                    warId: war.id,
                    warOpponent: war.data().opponent,
                    warMembers: war.data().members,
                    warResult: result,
                    warScore: score
                });
                this.setState({
                    wars: newState
                });
            })
            console.log(newState);
        });
    }

    render() {
        return (
          <div>
            <Header />
            <WarAddModal modalIsOpen={ this.props.modalIsOpen }
                          selectedGif={ this.props.selectedGif }
                          onRequestClose={ () => this.props.actions.closeModal() } />
            <WarList wars={this.state.wars} />
          </div>
        );
      }
}

export default WarPageContainer;