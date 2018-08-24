import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import WarMembers from '../components/WarMembers.jsx';

const EditWar = (props) => {
  return (
    <Modal
        open={props.modalIsOpen}
        onClose={props.onRequestClose}
        closeIcon>
        <Modal.Content scrolling>
        <Form className="container" onSubmit={props.handleFormSubmit}>
          <Form.Group>
            <Form.Input label='Opponent Name:' width={6} name='opponentName' onChange={props.handleChange} value={props.war.warOpponent} />
            <Form.Input label='Opponent Level:' width={4} name='opponentLevel' onChange={props.handleChange} value={props.war.opponentLevel} />
          </Form.Group>
          <Form.Group>
            <Form.Input label='Stars For:' width={4} name='starsFor' onChange={props.handleChange} value={props.war.starsFor} />
            <Form.Input label='Damage For:' width={4} name='damageFor' onChange={props.handleChange} value={props.war.damageFor} />
            <Form.Input label='Stars Against:' width={4} name='starsAgainst' onChange={props.handleChange} value={props.war.starsAgainst} />
            <Form.Input label='Damage Against:' width={4} name="damageAgainst" onChange={props.handleChange} value={props.war.damageAgainst} />
          </Form.Group>
          <Form.Group>
            <WarMembers members={props.war.warMembers}
                        handleChange={props.handleChange} />
          </Form.Group>
          <Button type="submit" className="btn-default btn-lg">Enter</Button>
        </Form>
        </Modal.Content>
    </Modal>
  )
}
  
export default EditWar;