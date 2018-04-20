import React from 'react';
import { Input } from 'react-materialize';

const MemberSelect = (props) => {
    var i = 0, rows = [];
    while (++i <= props.size) {
      rows.push(
      <li key={i}>
        <Input type="select" name={String(i - 1)} onChange={props.onChange} required>
            <option value=""> Select a member </option>
            {props.members.map((member) => {
            return (
              <option key={member.memberId} value={member.memberName}> {member.memberName} </option>
            )
          })}
        </Input>
      </li>)
    }
    return (<ol>{rows}</ol>);
  };

  export default MemberSelect;