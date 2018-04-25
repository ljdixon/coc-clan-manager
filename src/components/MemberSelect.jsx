import React from 'react';

const MemberSelect = (props) => {
  var i = 0, rows = [];

  props.members.sort(function (a, b) {
    return a.memberName.toLowerCase().localeCompare(b.memberName.toLowerCase());
  });

  while (++i <= props.size) {
    rows.push(
      <li key={i}>
        <select name={String(i - 1)} onChange={props.onChange} required>
            <option value=""> Select a member </option>
            {props.members.map((member) => {
            return (
              <option key={member.memberId} value={member.memberName}> {member.memberName} </option>
            )
          })}
        </select>
      </li>
    );
  };
  return (<ol>{rows}</ol>);
};

export default MemberSelect;