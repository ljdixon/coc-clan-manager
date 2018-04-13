import React from 'react';

const WarList = (props) => {
    var rows = [];
    props.wars.forEach((war) => {
      let classes = war.warResult + " list-group-item d-flex justify-content-between align-items-center";
      rows.push(
        <li key={war.warId} className = {classes}>
          ~FOG~ vs {war.warOpponent} {war.warScore}
        </li>
      )
    })
    return (<ul className="list-group">{rows}</ul>);
  };

  export default WarList;