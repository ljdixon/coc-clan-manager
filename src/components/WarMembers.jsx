import React from 'react';

const WarMembers = (props) => {
    var rows = [];
    props.members.forEach((member, i) => {
      rows.push(
        <li key={i} className = "list-group-item d-flex justify-content-between align-items-center">
         <input type="text" name={"memberName"+i} onChange={props.handleChange} value={member.name} /> <input type="text" name={"assignment"+i} onChange={props.handleChange} value={member.assignment} />
        </li>
      )
    })
    return (<ol className="list-group">{rows}</ol>);
  };

  export default WarMembers;