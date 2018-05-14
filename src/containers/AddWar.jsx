import React, { Component } from 'react';
import { firebase } from '../firebase';
import AddWarModal from "../components/AddWarModal.jsx"

class AddWar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponentName: '',
      warSize: 0,
      activeMembers: [],
      inactiveMembers: [],
      selectedMembers: [],
      isOpen: props.modalIsOpen
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  componentDidMount() {
    const membersRef = firebase.firestore.collection('members');
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

  handleChange(e) {
    if(e.target.name !== "warSize" && e.target.name !== "opponentName" && e.target.name !== "opponentLevel") {
      let tempSelectedMembers = this.state.selectedMembers
      //tempSelectedMembers[e.target.name] = e.target.value
      tempSelectedMembers.push({
        assignment:'',
        name: e.target.value
      })
      this.setState({
        selectedMembers: tempSelectedMembers
      });
    } else if(e.target.name === "warSize") {
      let tempSelectedMembers = this.state.selectedMembers;
      if(e.target.value === 5) {
        console.log(tempSelectedMembers);
        tempSelectedMembers = tempSelectedMembers.slice(0, 5);
      } else if(e.target.value === 10){
        tempSelectedMembers = tempSelectedMembers.slice(0, 10);
      }
      this.setState({
        selectedMembers: tempSelectedMembers,
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(this.state.opponentName);
    }
  }

  handleFormSubmit(e) {
		e.preventDefault();

    console.log(this.state.selectedMembers);

    const warsRef = firebase.firestore.collection('wars');
    const war = {
      members: this.state.selectedMembers,
      opponent: this.state.opponentName,
      stars_for: 0,
      stars_against: 0,
      damage_for: 0,
      damage_against: 0
    }

    warsRef.add(war);
    this.props.onRequestClose();
    this.setState({
      warSize: 0
    });
		//this.handleClearForm(e);
	}

  render() {
    return (
        <AddWarModal modalIsOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.onRequestClose}
                    handleChange={this.handleChange} 
                    handleFormSubmit={this.handleFormSubmit}
                    warSize={this.state.warSize}
                    activeMembers={this.state.activeMembers} />
      /*
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Example Modal" >
        <Container text style={{ marginTop: '5em' }}>
          <form className="container" onSubmit={this.handleFormSubmit}>
            <label>Opponent Name: </label><input type="text" name="opponentName" onChange={this.handleChange} value={this.state.opponentName} />
            <label>War size:</label><input value={this.state.warSize} name="warSize" onChange={this.handleChange} type="number" step="5" min="0" max="50" />
            <MemberSelect size={this.state.warSize} members={this.state.activeMembers} onChange={this.handleChange} />
            <Button type="submit" className="btn-default btn-lg">Enter</Button>
          </form>
          </Container>
      </Modal>
      */
    );
  }
}

export default AddWar;