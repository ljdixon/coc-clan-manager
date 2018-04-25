import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import MemberSelect from "../components/MemberSelect";

const AddWarModal = (props) => {
    return (
        <Modal
            open={props.modalIsOpen}
            onClose={props.onRequestClose}
            style={{ marginTop: '-600px', height: '200px' }}
            closeIcon>
            <Modal.Header>Add War</Modal.Header>
            <Modal.Content scrolling>
                <Form className="container" onSubmit={props.handleFormSubmit}>
                    <Form.Group>
                        <Form.Field>
                            <label>Opponent Name: </label>
                            <input type="text" name="opponentName" onChange={props.handleChange} value={props.opponentName} />
                        </Form.Field>
                        <Form.Field>
                            <label>War size:</label>
                            <input value={props.warSize} name="warSize" onChange={props.handleChange} type="number" step="5" min="0" max="50" />
                        </Form.Field>
                        <MemberSelect size={props.warSize} members={props.activeMembers} onChange={props.handleChange} />
                    </Form.Group>
                    <Button color='red' type="submit" inverted>Add</Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
};

export default AddWarModal;