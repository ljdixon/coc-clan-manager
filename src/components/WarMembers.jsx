import React from 'react';
import { Form, List } from 'semantic-ui-react';

const WarMembers = (props) => {
    var rows = [];
    props.members.forEach((member, i) => {
      rows.push(
        <List.Item key={i} className = "list-group-item d-flex justify-content-between align-items-center">
         <Form.Group inline>
          <Form.Input name={"memberName"+i} onChange={props.handleChange} value={member.name} />
          <Form.Input name={"assignment"+i} onChange={props.handleChange} value={member.assignment} />
         </Form.Group>
       </List.Item>
      )
    })
    return (<List ordered>{rows}</List>);
  };

  export default WarMembers;