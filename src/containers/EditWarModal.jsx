import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Button, Container } from 'react-materialize';
import Modal from 'react-modal';
import MemberSelect from "../components/MemberSelect";

class EditWarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warSize: 0,
      activeMembers: [],
      inactiveMembers: [],
      selectedMembers: [],
      isOpen: props.modalIsOpen
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    const membersRef = firebase.firestore().collection('members');
    membersRef.where("active", "==", true).onSnapshot((snapshot) => {
        let newState = [];
        snapshot.forEach((member) => {
            newState.push({
                memberId: member.id,
                memberName: member.data().name
            });
            this.setState({
                activeMembers: newState
            });
        })
    });
  }

  handleFormSubmit(e) {
		e.preventDefault();

    console.log(this.state.selectedMembers);

   firebase.firestore().collection('wars').doc(this.props.war.warId).update({
      "opponent": this.props.war.warOpponent
    })

   /* const war = {
      members: this.state.selectedMembers,
      opponent: this.state.opponentName,
      stars_for: 0,
      stars_against: 0,
      damage_for: 0,
      damage_against: 0
    }
    */

    //warsRef.add(war);
    this.props.onRequestClose();
    this.setState({
      warSize: 0
    });
		//this.handleClearForm(e);
	}

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Example Modal" >
         <Container text style={{ marginTop: '5em' }}>
          <form className="container" onSubmit={this.handleFormSubmit}>
            <label>Opponent Name: </label><input type="text" name="opponentName" onChange={this.props.handleChange} value={this.props.war.warOpponent} />
            <label>War size:</label><input value={this.state.warSize} name="warSize" onChange={this.handleChange} type="number" step="5" min="0" max="50" />
            <label>Opponent Level: </label><input type="text" name="opponentLevel" />
            <label>Stars For: </label><input type="text" name="starsFor" value={this.props.war.starsFor} />
            <label>Stars Against: </label><input type="text" name="starsAgainst" value={this.props.war.starsAgainst} />
            <label>Damage For: </label><input type="text" name="damageFor" value={this.props.war.damageFor} />
            <label>Damage Against: </label><input type="text" name="damageAgainst" value={this.props.war.damageAgainst} />
            <MemberSelect size={this.state.warSize} members={this.state.activeMembers} onChange={this.handleChange} />
            <Button type="submit" className="btn-default btn-lg">Enter</Button>
          </form>
        </Container>
      </Modal>
    );
  }
}

export default EditWarModal;