import React, { Component } from 'react';
import firebase from '../firebase.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';

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

const MemberList = (props) => {
  var i = 0, rows = [];
  while (++i <= props.size) {
    rows.push(
    <li key={i}>
      <Input type="select" name={i - 1} onChange={props.onChange} required>
          <option value=""> Select a member </option>
          {props.members.map((member) => {
          return (
            <option key={member.memberId} value={member.memberId}> {member.memberName} </option>
          )
        })}
      </Input>
    </li>)
  }
  return (<ol>{rows}</ol>);
};

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponentName: '',
      opponentLevel: '',
      warSize: 0,
      activeMembers: [],
      inactiveMembers: [],
      selectedMembers: [],
      wars: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleChange(e) {
    if(e.target.name !== "warSize" && e.target.name !== "opponentName" && e.target.name !== "opponentLevel") {
      let tempSelectedMembers = this.state.selectedMembers
      tempSelectedMembers[e.target.name] = e.target.value
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
    }
  }

  handleFormSubmit(e) {
		e.preventDefault();

    console.log(this.state.selectedMembers);

    const warsRef = firebase.database().ref('wars');
    const war = {
      members: this.state.selectedMembers,
      opponent: this.state.opponentName
    }

    warsRef.push(war);
    this.props.history.push('/wars');
		//this.handleClearForm(e);
	}

  render() {
    return (
      <div>
        <Header />
        <form className="container" onSubmit={this.handleFormSubmit}>
          <label>Opponent Name: </label><input type="text" name="opponentName" onChange={this.handleChange} value={this.state.opponentName} />
          <label>Opponent Level: </label><input type="text" name="opponentLevel" />
          <label>War size:</label><input value={this.state.warSize} name="warSize" onChange={this.handleChange} type="number" step="5" min="0" max="50" />
          <MemberList size={this.state.warSize} members={this.state.activeMembers} onChange={this.handleChange} />
          <Button type="submit" className="btn-default btn-lg">Enter</Button>
        </form>
      </div>
    );
  }
}

export default FormContainer;