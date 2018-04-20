import React from 'react';
import Modal from 'react-modal';
import { Button, Icon, Input } from 'react-materialize';
import MemberSelectContainer from "../containers/MemberSelectContainer";

const AddWarModal = (props) => {
    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={props.onRequestClose}
                contentLabel="Example Modal" >
                <div>
                    <form className="container" onSubmit={this.handleFormSubmit}>
                    <label>Opponent Name: </label><input type="text" name="opponentName" />
                    <label>Opponent Level: </label><input type="text" name="opponentLevel" />
                    <label>Stars For: </label><input type="text" name="starsFor" />
                    <label>Stars Against: </label><input type="text" name="starsAgainst" />
                    <label>Damage For: </label><input type="text" name="damageFor" />
                    <label>Damage Against: </label><input type="text" name="damageAgainst" />
                    <label>War size:</label><input name="warSize" type="number" step="5" min="0" max="50" />
                    <MemberSelectContainer />
                    <Button type="submit" className="btn-default btn-lg">Enter</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default AddWarModal;