import React, { Component } from 'react';
import { firebase } from '../firebase';
import { Container, Button, Icon } from 'semantic-ui-react';
import WarList from '../components/WarList.jsx';
import EditWar from '../components/EditWar.jsx';
import AddWar from "../containers/AddWar.jsx"
import withAuthorization from '../components/withAuthorization';
import AuthUserContext from '../components/AuthUserContext';

const authCondition = (authUser) => !!authUser && (authUser.email === 'leonardjdixon@gmail.com' || authUser.email === 'demo@clanfog.com');

class WarPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wars: [],
            opponentName: '',
            selectedWar: '',
            activeMembers: [],
            addWarModalIsOpen: false
        };
        this.openAddWarModal = this.openAddWarModal.bind(this);
        this.closeAddWarModal = this.closeAddWarModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    openAddWarModal() {
        this.setState({
            addWarModalIsOpen: true
        });
    }
    
    closeAddWarModal() {
        this.setState({
            addWarModalIsOpen: false
        });
    }

    openEditWarModal() {
        this.setState({
            editWarModalIsOpen: true
        });
    }
    
    closeEditWarModal() {
        this.setState({
            editWarModalIsOpen: false
        });
    }

    handleClick(clickedWar) {
        console.log(clickedWar);
        this.setState({
            selectedWar: clickedWar
        });
        this.openEditWarModal();
    }

    handleChange(e) {
        e.preventDefault();
        if(e.target.name === "warSize") {
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
        } else if(e.target.name === "assignment") {
            console.log(e.target.key);
            let tempSelectedWar = this.state.selectedWar;
                tempSelectedWar.warMembers[e.target.key].assignment = e.target.value;
            this.setState({
                selectedWar: tempSelectedWar
            });
        } else if(e.target.name === "opponentName") {
            let tempSelectedWar = this.state.selectedWar;
                tempSelectedWar.warOpponent = e.target.value;
            this.setState({
                selectedWar: tempSelectedWar
            });
        } else if(e.target.name.indexOf("assignment") >= 0) {
            console.log(e.target.name.match(/\d+/)[0]);
            let index = e.target.name.match(/\d+/)[0];
            let tempSelectedWar = this.state.selectedWar;
                tempSelectedWar.warMembers[index].assignment = e.target.value;
            this.setState({
                selectedWar: tempSelectedWar
            });
        } else {
            let tempSelectedWar = this.state.selectedWar;
            tempSelectedWar[e.target.name] = e.target.value;
            this.setState({
                selectedWar: tempSelectedWar
            });
        }
    }

    handleFormSubmit(e) {
		e.preventDefault();

        firebase.firestore.collection('wars').doc(this.state.selectedWar.warId).update({
            "opponent": this.state.selectedWar.warOpponent,
            "members": this.state.selectedWar.warMembers,
            "stars_for": this.state.selectedWar.starsFor,
            "stars_against": this.state.selectedWar.starsAgainst,
            "damage_for": this.state.selectedWar.damageFor,
            "damage_against": this.state.selectedWar.damageAgainst
        })

        this.closeEditWarModal()
        this.setState({
            warSize: 0
        });
	}

    componentDidMount() {
        const warsRef = firebase.firestore.collection('wars');
        warsRef.orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            let newState = [];
            snapshot.forEach((war) => {
                let score = "(" + war.data().stars_for + " - " + war.data().stars_against + ")";
                let result = '';
                if(war.data().stars_for > war.data().stars_against) { 
                    result = "won"; 
                } else if(war.data().stars_for < war.data().stars_against){
                    result = "lost";
                } else if(war.data().stars_for === war.data().stars_against){
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
                    warScore: score,
                    starsFor: war.data().stars_for,
                    starsAgainst: war.data().stars_against,
                    damageFor: war.data().damage_for,
                    damageAgainst: war.data().damage_against
                });
                this.setState({
                    wars: newState
                });
            })
        });
    }

    render() {
        return (
         
                        <div>
                            <Container text style={{ marginTop: '5em' }}>
                                <Button color="red" onClick={() => this.openAddWarModal()} inverted><Icon name="plus"></Icon>Add War</Button>
                                <WarList wars={this.state.wars} onWarClick={ selectedWar => this.handleClick(selectedWar) } />
                                <EditWar 
                                    war={this.state.selectedWar}
                                    handleChange={this.handleChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    modalIsOpen={this.state.editWarModalIsOpen}
                                    onRequestClose={ () => this.closeEditWarModal() } />
                                <AddWar  
                                    modalIsOpen={this.state.addWarModalIsOpen}
                                    onRequestClose={ () => this.closeAddWarModal() } />
                            </Container>
                        </div>
 
        );
      }
}

export default withAuthorization(authCondition)(WarPageContainer);