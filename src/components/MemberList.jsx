import React from 'react';

const MemberList = (props) => {
    var rows = [];
    props.members.forEach((member) => {
      rows.push(
        <li key={member.memberId} className = "list-group-item d-flex justify-content-between align-items-center">
          {member.memberName}
        </li>
      )
    })
    return (<ol className="list-group">{rows}</ol>);
  };

  export default MemberList;