import React from 'react';
import { Button, Container } from 'react-materialize';
import Modal from 'react-modal';
import WarMembers from '../components/WarMembers.jsx';

const EditWar = (props) => {
  return (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.onRequestClose}
        contentLabel="Example Modal" >
        <Container text style={{ marginTop: '5em' }}>
        <form className="container" onSubmit={props.handleFormSubmit}>
            <label>Opponent Name: </label><input type="text" name="opponentName" onChange={props.handleChange} value={props.war.warOpponent} />
            <label>Opponent Level: </label><input type="text" name="opponentLevel" />
            <label>Stars For: </label><input type="text" name="starsFor" value={props.war.starsFor} />
            <label>Stars Against: </label><input type="text" name="starsAgainst" value={props.war.starsAgainst} />
            <label>Damage For: </label><input type="text" name="damageFor" value={props.war.damageFor} />
            <label>Damage Against: </label><input type="text" name="damageAgainst" value={props.war.damageAgainst} />
            <WarMembers members={props.war.warMembers}
                        handleChange={props.handleChange} />
            <Button type="submit" className="btn-default btn-lg">Enter</Button>
        </form>
        </Container>
    </Modal>
  )
}
  
export default EditWar;